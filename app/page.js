'use client'

import { useState } from 'react'

const ZODIAC_SIGNS = [
  {
    name: 'Aries',
    dateRange: 'Mar 21 - Apr 19',
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    symbol: '♈',
    description: 'Courageous, determined, confident, and passionate.',
    element: 'Fire',
    color: '#FF6B6B',
  },
  {
    name: 'Taurus',
    dateRange: 'Apr 20 - May 20',
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    symbol: '♉',
    description: 'Reliable, practical, devoted, and sensible.',
    element: 'Earth',
    color: '#95D630',
  },
  {
    name: 'Gemini',
    dateRange: 'May 21 - Jun 20',
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    symbol: '♊',
    description: 'Expressive, quick-witted, intelligent, and adaptable.',
    element: 'Air',
    color: '#FFD700',
  },
  {
    name: 'Cancer',
    dateRange: 'Jun 21 - Jul 22',
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    symbol: '♋',
    description: 'Protective, intuitive, sensitive, and compassionate.',
    element: 'Water',
    color: '#87CEEB',
  },
  {
    name: 'Leo',
    dateRange: 'Jul 23 - Aug 22',
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    symbol: '♌',
    description: 'Creative, generous, warm-hearted, and charismatic.',
    element: 'Fire',
    color: '#FF8C00',
  },
  {
    name: 'Virgo',
    dateRange: 'Aug 23 - Sep 22',
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    symbol: '♍',
    description: 'Analytical, hardworking, practical, and loyal.',
    element: 'Earth',
    color: '#DAA520',
  },
  {
    name: 'Libra',
    dateRange: 'Sep 23 - Oct 22',
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    symbol: '♎',
    description: 'Diplomatic, fair, social, and gracious.',
    element: 'Air',
    color: '#E6E6FA',
  },
  {
    name: 'Scorpio',
    dateRange: 'Oct 23 - Nov 21',
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    symbol: '♏',
    description: 'Resourceful, powerful, mysterious, and determined.',
    element: 'Water',
    color: '#8B0000',
  },
  {
    name: 'Sagittarius',
    dateRange: 'Nov 22 - Dec 21',
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    symbol: '♐',
    description: 'Optimistic, freedom-loving, honest, and adventurous.',
    element: 'Fire',
    color: '#9370DB',
  },
  {
    name: 'Capricorn',
    dateRange: 'Dec 22 - Jan 19',
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    symbol: '♑',
    description: 'Responsible, disciplined, ambitious, and practical.',
    element: 'Earth',
    color: '#2F4F4F',
  },
  {
    name: 'Aquarius',
    dateRange: 'Jan 20 - Feb 18',
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    symbol: '♒',
    description: 'Independent, intellectual, innovative, and humanitarian.',
    element: 'Air',
    color: '#4169E1',
  },
  {
    name: 'Pisces',
    dateRange: 'Feb 19 - Mar 20',
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    symbol: '♓',
    description: 'Compassionate, artistic, intuitive, and gentle.',
    element: 'Water',
    color: '#20B2AA',
  },
]

function getZodiacSign(date) {
  const month = date.getMonth() + 1
  const day = date.getDate()

  for (const sign of ZODIAC_SIGNS) {
    let isInRange = false

    if (sign.startMonth === sign.endMonth) {
      isInRange = month === sign.startMonth && day >= sign.startDay && day <= sign.endDay
    } else if (sign.startMonth < sign.endMonth) {
      isInRange =
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay) ||
        (month > sign.startMonth && month < sign.endMonth)
    } else {
      isInRange =
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay) ||
        month > sign.startMonth ||
        month < sign.endMonth
    }

    if (isInRange) {
      return sign
    }
  }

  return null
}

export default function Home() {
  const [birthDate, setBirthDate] = useState('')
  const [zodiacSign, setZodiacSign] = useState(null)
  const [error, setError] = useState('')

  const handleDateChange = (e) => {
    const date = e.target.value
    setBirthDate(date)
    setError('')

    if (date) {
      const selectedDate = new Date(date)
      const today = new Date()

      if (selectedDate > today) {
        setError('Birth date cannot be in the future')
        setZodiacSign(null)
        return
      }

      const sign = getZodiacSign(selectedDate)
      setZodiacSign(sign)
    } else {
      setZodiacSign(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            ✨ Zodiac Sign Predictor ✨
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Discover your zodiac sign and cosmic traits
          </p>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Enter Your Birth Date
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={handleDateChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {zodiacSign && (
            <div
              className="mt-8 p-6 rounded-lg text-white transition-all duration-300"
              style={{ backgroundColor: zodiacSign.color }}
            >
              <div className="text-center">
                <div className="text-6xl mb-3">{zodiacSign.symbol}</div>
                <h2 className="text-3xl font-bold mb-1">{zodiacSign.name}</h2>
                <p className="text-sm opacity-90 mb-4">{zodiacSign.dateRange}</p>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-semibold mb-1">Traits</p>
                  <p className="text-sm opacity-95">{zodiacSign.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm">Element</p>
                    <p className="text-sm opacity-95">{zodiacSign.element}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Date Range</p>
                    <p className="text-sm opacity-95">{zodiacSign.dateRange}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!zodiacSign && !error && (
            <div className="mt-8 p-6 bg-gray-100 rounded-lg text-center text-gray-500">
              <p>Select your birth date to reveal your zodiac sign</p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-4 gap-2">
            {ZODIAC_SIGNS.map((sign) => (
              <div
                key={sign.name}
                className="text-center p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                title={sign.name}
              >
                <div className="text-2xl">{sign.symbol}</div>
                <p className="text-xs text-gray-600 mt-1">{sign.name.slice(0, 3)}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-white text-sm mt-6 opacity-75">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </div>
  )
}
