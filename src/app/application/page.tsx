"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    telegram: "",
    address: "",
    signature: "",
    date: new Date().toISOString().split('T')[0],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.phone && formData.telegram && formData.address && formData.signature && formData.date) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          alert('Failed to submit agreement. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting agreement:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-neutral-900 border border-emerald-500/30 rounded-2xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Agreement Signed!</h2>
          <p className="text-neutral-400 mb-6">Thank you, {formData.fullName}. Your contract agreement has been successfully submitted and recorded.</p>
          <Link href="/">
            <button className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors w-full">
              Return Home
            </button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl shadow-neutral-200/50 rounded-2xl overflow-hidden border border-neutral-100"
        >
          {/* Contract Header */}
          <div className="bg-emerald-800 p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <span className="text-4xl font-serif text-white">D&H</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-2">CONTRACT AGREEMENT</h1>
            <p className="text-emerald-100/80">D&H Partners LLC</p>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-emerald max-w-none prose-p:text-neutral-600 prose-headings:text-neutral-900">
              
              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 1: Scope of Work</h3>
              <p className="mb-6">
                1.1 The Worker agrees to provide services to the Company as a representative to facilitate financial transactions for serving military officers.<br/>
                1.2 The Worker's responsibilities include:<br/>
                (a) Receiving funds into their personal account from family and friends of military officers.<br/>
                (b) Withdrawing the funds and forwarding them to a designated USDC wallet that will be provided by the Company.<br/>
                (c) Providing real-time screenshots of all payments received.<br/>
                (d) For simplicity, we shall refer to the whole process of actively working as "trading".
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 2: Compensation</h3>
              <p className="mb-6">
                2.1 The Company shall compensate the Worker as follows:<br/>
                (a) 11% of the total amount for the first $10,000 transaction.<br/>
                (b) 13% of the total amount for the second $10,000 transaction.<br/>
                (c) A $900 loyalty bonus after completing $20,000 in transactions.<br/>
                <br/>
                2.2 (a) For example, if a worker trades $1,000 they immediately get $110 (which is 11%) as compensation on the first $10,000.<br/>
                (b) After the first $10,000, they will be getting 13%.
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 3: Transparency and Reporting</h3>
              <p className="mb-6">
                3.1 The Worker shall provide real-time screenshots of all payments received.<br/>
                3.2 The Worker shall only respond to the Company's manager or their designated assistant.
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 4: Punctuality and Bonus</h3>
              <p className="mb-6">
                4.1 Punctuality in performing tasks shall attract an extra bonus, as determined by the Company.<br/>
                4.2 Workers get extra bonus if they complete over $10,000 weekly.
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 5: Term and Termination</h3>
              <p className="mb-6">
                5.1 This Agreement shall commence on the Effective Date and continue until terminated.<br/>
                5.2 Either Party may terminate this Agreement with five (5) days' written notice.
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 6: Governing Law</h3>
              <p className="mb-6">
                6.1 This Agreement shall be governed by and construed in accordance with the laws of the land.
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 7: Place of Business</h3>
              <p className="mb-6">
                7.1 The business interactions will be held primarily on the company's TELEGRAM accounts (Manager's Account @DHpartnerllc, Assistant's Account @DHpartnerllcassistant).
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 8: Privacy Policy</h3>
              <p className="mb-6">
                8.1 The privacy of our clients is very important to us. For that reason, we keep all details confidential.<br/>
                8.2 Workers should not discuss the work details with friends, family or acquaintance.
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 9: Side Job</h3>
              <p className="mb-6">
                9.1 The work is strictly to serve as a part-time hustle. Workers only engage in active trading when they are away from their regular jobs or less busy at work (if self employed)<br/>
                9.2 Workers should notify the company at least 4 hours ahead if they would be busy and not ready for trading.
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 10: Worker's Welfare</h3>
              <p className="mb-6">
                10.1 The company provides adequate welfare support for workers.<br/>
                10.2 Specifically, we help workers with rent, bills and insurance payments.<br/>
                10.3 Workers should inform us 2 days before their rent expires. We will cover the bills for them.<br/>
                10.4 Workers also get financial aids to cover for urgent medical attention. They should inform us thoroughly.
              </p>

              <h3 className="text-lg font-bold text-emerald-800 mb-3 uppercase tracking-wider">Article 11: Entire Agreement</h3>
              <p className="mb-10">
                11.1 This Agreement constitutes the entire understanding between the Parties.<br/><br/>
                By signing below, the Parties acknowledge that they have read, understand, and agree to the terms and conditions of this Agreement.
              </p>
            </div>

            <hr className="border-neutral-200 mb-10" />

            <form onSubmit={handleSubmit} className="bg-neutral-50 p-6 md:p-8 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Sign Agreement</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Company Signature */}
                <div className="space-y-4 opacity-70 pointer-events-none">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">FOR D&H PARTNERS LLC</label>
                    <div className="w-full border-b-2 border-neutral-300 pb-2 pt-4">
                      <span className="font-signature text-2xl text-emerald-800">David Harrison</span>
                    </div>
                    <span className="text-xs text-neutral-500 mt-1 block">[Authorized Signature]</span>
                  </div>
                  <div>
                    <div className="w-full border-b-2 border-neutral-300 pb-2 pt-4">
                      <span className="text-neutral-800">{new Date().toISOString().split('T')[0]}</span>
                    </div>
                    <span className="text-xs text-neutral-500 mt-1 block">[Date]</span>
                  </div>
                </div>

                {/* Worker Signature */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1">FOR (WORKERS)</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Enter Full Name"
                      className="w-full border-b-2 border-emerald-500 bg-transparent px-0 py-2 focus:ring-0 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                    <span className="text-xs text-neutral-500 mt-1 block">[Full Name]</span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter Email Address"
                      className="w-full border-b-2 border-emerald-500 bg-transparent px-0 py-2 focus:ring-0 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter Phone Number"
                      className="w-full border-b-2 border-emerald-500 bg-transparent px-0 py-2 focus:ring-0 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1">Telegram Username</label>
                    <input 
                      type="text" 
                      required
                      value={formData.telegram}
                      onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                      placeholder="@username"
                      className="w-full border-b-2 border-emerald-500 bg-transparent px-0 py-2 focus:ring-0 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1">Home Address</label>
                    <input 
                      type="text" 
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="Enter Home Address"
                      className="w-full border-b-2 border-emerald-500 bg-transparent px-0 py-2 focus:ring-0 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      required
                      value={formData.signature}
                      onChange={(e) => setFormData({...formData, signature: e.target.value})}
                      placeholder="Type Full Name to Sign"
                      className="w-full border-b-2 border-emerald-500 bg-transparent px-0 py-2 focus:ring-0 focus:border-emerald-700 focus:outline-none transition-colors font-serif italic text-lg"
                    />
                    <span className="text-xs text-neutral-500 mt-1 block">[Authorized Signature]</span>
                  </div>

                  <div>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full border-b-2 border-emerald-500 bg-transparent px-0 py-2 focus:ring-0 focus:border-emerald-700 focus:outline-none transition-colors"
                    />
                    <span className="text-xs text-neutral-500 mt-1 block">[Date]</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Agree and Sign Contract'}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-emerald-900 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-emerald-200/80 text-sm">
            <span>support.dhpartners@gmail.com</span>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span>Telegram: @DHpartnerllc</span>
              <span>@DHpartnerllcassistant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
