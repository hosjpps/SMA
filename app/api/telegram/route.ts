import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = '8498331943:AAF064skZIaVhpe_syc_vVjblDDVrKo8Y6I'
const TELEGRAM_CHAT_ID = '-5037669257'
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, business, website, contact, comment } = body

    // Формируем сообщение
    const message = `🎯 *Новая заявка с сайта*

👤 *Имя:* ${name}
🏢 *Бизнес / ниша:* ${business}
🌐 *Сайт / соцсети:* ${website || 'Не указано'}
📱 *Telegram / WhatsApp:* ${contact}
💬 *Комментарий:* ${comment || 'Нет комментария'}`

    // Отправляем в Telegram
    const response = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Telegram API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

