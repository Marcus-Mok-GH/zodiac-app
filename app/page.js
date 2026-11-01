'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

const zodiacSigns = [
  { sign: 'Aries', dates: 'Mar 21 - Apr 19', symbol: '♈', color: 'from-red-500 to-orange-500', traits: 'Bold, Courageous, Determined' },
  { sign: 'Taurus', dates: 'Apr 20 - May 20', symbol: '♉', color: 'from-green-500 to-emerald-500', traits: 'Reliable, Patient, Practical' },
  { sign: 'Gemini', dates: 'May 21 - Jun 20', symbol: '♊', color: 'from-yellow-500 to-amber-500', traits: 'Adaptable, Outgoing, Intelligent' },
  { sign: 'Cancer', dates: 'Jun 21 - Jul 22', symbol: '♋', color: 'from-blue-400 to-cyan-500', traits: 'Intuitive, Sentimental, Protective' },
  { sign: 'Leo', dates: 'Jul 23 - Aug 22', symbol: '♌', color: 'from-yellow-600 to-red-500', traits: 'Creative, Generous, Warm-hearted' },
  { sign: 'Virgo', dates: 'Aug 23 - Sep 22', symbol: '♍', color: 'from-green-600 to-teal-500', traits: 'Analytical, Practical, Meticulous' },
  { sign: 'Libra', dates: 'Sep 23 - Oct 22', symbol: '♎', color: 'from-pink-500 to-purple-500', traits: 'Diplomatic, Fair-minded, Social' },
  { sign: 'Scorpio', dates: 'Oct 23 - Nov 21', symbol: '♏', color: 'from-purple-600 to-indigo-600', traits: 'Determined, Passionate, Secretive' },
  { sign: 'Sagittarius', dates: 'Nov 22 - Dec 21', symbol: '♐', color: 'from-blue-500 to-purple-600', traits: 'Optimistic, Freedom-loving, Honest' },
  { sign: 'Capricorn', dates: 'Dec 22 - Jan 19', symbol: '♑', color: 'from-gray-600 to-slate-700', traits: 'Responsible, Disciplined, Self-controlled' },
  { sign: 'Aquarius', dates: 'Jan 20 - Feb 18', symbol: '♒', color: 'from-cyan-500 to-blue-600', traits: 'Independent, Intellectual, Humanitarian' },
  { sign: 'Pisces', dates: 'Feb 19 - Mar 20', symbol: '♓', color: 'from-teal-500 to-green-500', traits: 'Compassionate, Artistic, Intuitive' },
];

function getZodiacSign(month, day) {
  const zodiac = zodiacSigns.find(z => {
    const [startMonth, startDay] = z.dates.split(' - ')[0].split(' ').map((x, i) => i === 0 ? new Date(`${x} 1`).getMonth() + 1 : parseInt(x));
    const [endMonth, endDay] = z.dates.split(' - ')[1].split(' ').map((x, i) => i === 0 ? new Date(`${x} 1`).getMonth() + 1 : parseInt(x));
    
    if (month === startMonth && day >= startDay) return true;
    if (month === endMonth && day <= endDay) return true;
    return false;
  });
  return zodiac;
}

export default function ZodiacApp() {
  const [date, setDate] = useState('');
  const [zodiac, setZodiac] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    
    if (selectedDate) {
      const [year, month, day] = selectedDate.split('-').map(Number);
      const sign = getZodiacSign(month, day);
      setZodiac(sign);
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Zodiac Sign Finder
            </h1>
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
          <p className="text-gray-300 text-lg">Discover your cosmic identity</p>
        </div>

        {/* Input Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <label className="block text-white text-lg font-semibold mb-4">
            Enter Your Birth Date
          </label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition text-lg"
          />
        </div>

        {/* Result Card */}
        {showResult && zodiac && (
          <div className={`animate-fade-in bg-gradient-to-br ${zodiac.color} rounded-2xl p-8 shadow-2xl border border-white/20`}>
            <div className="text-center">
              <div className="text-8xl mb-4">{zodiac.symbol}</div>
              <h2 className="text-5xl font-bold text-white mb-2">{zodiac.sign}</h2>
              <p className="text-white/90 text-xl mb-4 font-medium">{zodiac.dates}</p>
              
              <div className="bg-black/20 rounded-xl p-6 mt-6">
                <p className="text-white/95 text-lg">
                  <span className="font-semibold">Traits:</span> {zodiac.traits}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Element</p>
                  <p className="text-white font-bold text-lg">
                    {['Aries', 'Leo', 'Sagittarius'].includes(zodiac.sign) ? '🔥 Fire' :
                     ['Taurus', 'Virgo', 'Capricorn'].includes(zodiac.sign) ? '🌍 Earth' :
                     ['Gemini', 'Libra', 'Aquarius'].includes(zodiac.sign) ? '💨 Air' :
                     '💧 Water'}
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Ruler</p>
                  <p className="text-white font-bold text-lg">
                    {['Aries'].includes(zodiac.sign) ? '♂ Mars' :
                     ['Taurus'].includes(zodiac.sign) ? '♀ Venus' :
                     ['Gemini', 'Virgo'].includes(zodiac.sign) ? '☿ Mercury' :
                     ['Cancer'].includes(zodiac.sign) ? '☽ Moon' :
                     ['Leo'].includes(zodiac.sign) ? '☉ Sun' :
                     ['Libra'].includes(zodiac.sign) ? '♀ Venus' :
                     ['Scorpio'].includes(zodiac.sign) ? '♂ Mars' :
                     ['Sagittarius'].includes(zodiac.sign) ? '♃ Jupiter' :
                     ['Capricorn'].includes(zodiac.sign) ? '♄ Saturn' :
                     ['Aquarius'].includes(zodiac.sign) ? '♄ Saturn' :
                     ['Pisces'].includes(zodiac.sign) ? '♃ Jupiter' : '?'}
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Polarity</p>
                  <p className="text-white font-bold text-lg">
                    {['Aries', 'Gemini', 'Leo', 'Libra', 'Sagittarius', 'Aquarius'].includes(zodiac.sign) ? '+ Yang' : '- Yin'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Signs Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">All Zodiac Signs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {zodiacSigns.map((sign) => (
              <div
                key={sign.sign}
                className={`bg-gradient-to-br ${sign.color} rounded-lg p-4 text-center text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition cursor-default`}
              >
                <div className="text-3xl mb-2">{sign.symbol}</div>
                <p className="font-bold text-sm">{sign.sign}</p>
                <p className="text-xs text-white/80">{sign.dates}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>✨ Explore the mysteries of the cosmos ✨</p>
        </div>
      </div>
    </div>
  );
}
