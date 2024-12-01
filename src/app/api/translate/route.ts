import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { text, sourceLang, targetLang } = await request.json();

    // 这里我们将使用 Cloudflare AI 进行翻译
    // 需要添加你的 Cloudflare API 密钥和账户 ID
    const CLOUDFLARE_API_KEY = process.env.CLOUDFLARE_API_KEY;
    const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

    if (!CLOUDFLARE_API_KEY || !CLOUDFLARE_ACCOUNT_ID) {
      return NextResponse.json(
        { error: 'Missing Cloudflare credentials' },
        { status: 500 }
      );
    }

    // 构建提示词
    const prompt = `Translate the following text from ${sourceLang} to ${targetLang}:\n${text}`;

    console.log('Prompt:', prompt);

    // 调用 Cloudflare AI API
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.2-11b-vision-instruct`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: 'You are a professional translator. Translate the text accurately while maintaining its original meaning and style.'
            },
            {
              role: 'user',
              content: prompt
            }
          ]
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Translation failed' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      translation: result.result.response
    });

  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
