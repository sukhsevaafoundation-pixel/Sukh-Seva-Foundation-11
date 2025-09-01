import React, { useState, useEffect, useCallback } from 'react';
import { FilledHeartIcon, CheckCircleIcon, CloseIcon, XCircleIcon } from './Icons';

// In a real-world app, this would come from a shared data source or API.
const initiativesData = [
    'Project Udaan (Education for All)',
    'Jeevan Jyoti (Healthcare & Wellness)',
    'Ann Seva (Food & Nutrition Drive)',
    'Prakriti Raksha (Environment & Sustainability)',
    'Women Safety Initiative',
    'General Fund'
];

const presetAmounts = [199, 499, 999, 1999, 4999];

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Placeholder modal for donation history
const HistoryPlaceholderModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[110] flex justify-center items-center p-4 transition-opacity duration-300 animate-fadeIn" onClick={onClose}>
        <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-sm text-center transform transition-transform duration-300 animate-scaleIn" onClick={e => e.stopPropagation()}>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Donation History</h4>
            <p className="text-gray-600 mb-6">Viewing donation history is not yet implemented.</p>
            <button
                onClick={onClose}
                className="w-full bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                Close
            </button>
        </div>
    </div>
);


const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  type Step = 'amount' | 'details' | 'success' | 'failure';
  const [step, setStep] = useState<Step>('amount');
  const [selectedAmount, setSelectedAmount] = useState<number>(499);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', city: '', age: '', gender: '', initiative: ''
  });
  const [isHistoryVisible, setIsHistoryVisible] = useState<boolean>(false);


  const finalAmount = customAmount ? parseInt(customAmount, 10) || 0 : selectedAmount;

  const resetState = useCallback(() => {
    setStep('amount');
    setSelectedAmount(499);
    setCustomAmount('');
    setIsMonthly(false);
    setIsHistoryVisible(false);
    setFormData({ fullName: '', email: '', phone: '', city: '', age: '', gender: '', initiative: '' });
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isHistoryVisible) {
          setIsHistoryVisible(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      // Reset state when modal is opened
      resetState();
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, resetState, isHistoryVisible]);

  if (!isOpen) return null;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only digits
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(0);
    }
  };
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please fill in at least your Full Name and Email Address.");
      return;
    }
    setIsProcessing(true);
    // Simulate API call to payment gateway
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // 80% success rate
      setStep(isSuccess ? 'success' : 'failure');
      setIsProcessing(false);
    }, 2000);
  };
  
  const renderContent = () => {
    switch (step) {
      case 'success':
        return <SuccessView onClose={onClose} />;
      case 'failure':
        return <FailureView onRetry={() => setStep('details')} onClose={onClose} />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3">
            <LeftPanel />
            {step === 'amount' ? <AmountStep /> : <DetailsStep />}
          </div>
        );
    }
  };

  const LeftPanel = () => (
    <div className="bg-[#111827] text-white p-8 md:p-12 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none">
      <FilledHeartIcon className="w-16 h-16 text-pink-500 mb-6" />
      <h2 className="text-3xl font-bold mb-4">Your Donation Matters</h2>
      <p className="text-gray-300 mb-8">
        Every contribution, no matter the size, helps us empower communities and create lasting change. Your support is vital to our work.
      </p>
      <div className="space-y-4 text-gray-200">
        <div className="flex items-start">
          <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
          <span><span className="font-semibold">100% Secure Payments</span> powered by trusted gateways.</span>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
          <span>All donations are managed transparently and used solely for our mission. Reports will be shared publicly.</span>
        </div>
      </div>
    </div>
  );

  const AmountStep = () => (
    <div className="md:col-span-2 p-8 md:p-12">
       <h3 className="text-2xl font-bold mb-6">Choose an Amount</h3>
       <div className="grid grid-cols-3 gap-3 mb-4">
          {presetAmounts.map(amount => (
            <button key={amount} onClick={() => handleAmountSelect(amount)} className={`py-3 px-2 rounded-lg font-bold text-center transition-colors border-2 ${selectedAmount === amount ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-800 border-gray-300 hover:border-gray-800'}`}>
              ₹{amount}
            </button>
          ))}
       </div>
       <input type="text" placeholder="Or enter custom amount" value={customAmount} onChange={handleCustomAmountChange} className="w-full p-3 border-2 border-gray-300 rounded-lg text-center focus:border-indigo-500 focus:ring-indigo-500 mb-4" />
       <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-6">
          <label htmlFor="monthly" className="font-semibold">Make it monthly</label>
          <button onClick={() => setIsMonthly(!isMonthly)} className={`w-12 h-6 rounded-full flex items-center transition-colors ${isMonthly ? 'bg-green-500' : 'bg-gray-300'}`}>
              <span className={`block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${isMonthly ? 'translate-x-6' : 'translate-x-1'}`}></span>
          </button>
       </div>
       <button onClick={() => setStep('details')} disabled={!finalAmount || finalAmount <= 0} className="w-full bg-gray-800 text-white font-bold py-4 rounded-lg hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
          Proceed to Donate ₹{finalAmount.toLocaleString()}
       </button>
    </div>
  );

  const DetailsStep = () => (
    <div className="md:col-span-2 p-8 md:p-12">
      <div className="flex justify-between items-start">
        <div>
            <h3 className="text-2xl font-bold mb-1">Your Details</h3>
            <p className="text-gray-600 mb-6">Enter your information to proceed.</p>
        </div>
        <button onClick={() => setStep('amount')} className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex-shrink-0 ml-4">
            &larr; Change Amount
        </button>
      </div>

      <div className="text-sm text-gray-600 mb-6 -mt-2">
            Have you donated before?{' '}
            <button type="button" onClick={() => setIsHistoryVisible(true)} className="font-medium text-indigo-600 hover:underline focus:outline-none">
                View donation history
            </button>
      </div>

      <form onSubmit={handleProcessPayment} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleFormChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleFormChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleFormChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleFormChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          <select name="gender" value={formData.gender} onChange={handleFormChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <select name="initiative" value={formData.initiative} onChange={handleFormChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white">
          <option value="">Select an initiative (optional)</option>
          {initiativesData.map(name => <option key={name} value={name}>{name}</option>)}
        </select>
        
        {/* --- Primary Payment Gateway Button --- */}
        <button type="submit" disabled={isProcessing} className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-wait flex items-center justify-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v2H7a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2h-1V4a2 2 0 00-2-2zm-1 4V4a1 1 0 011-1h0a1 1 0 011 1v2H9z" clipRule="evenodd" />
          </svg>
          <span>
            {isProcessing ? 'Processing...' : `Pay ₹${finalAmount.toLocaleString()} Securely`}
          </span>
        </button>
      </form>

      {/* --- Secondary Payment Options (UPI/QR) --- */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-sm font-medium text-gray-500">
            Or pay via UPI / QR
          </span>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <img 
          src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi%3A%2F%2Fpay%3Fpa%3Dsukhsevaafoundation@gmail.com%26pn%3DSukh%2520Seva%2520Foundation" 
          alt="UPI QR Code for Sukh Seva Foundation" 
          className="w-36 h-36 rounded-md border bg-white"
        />
        <div className="text-center sm:text-left">
          <p className="text-gray-600">Scan the code with any UPI app</p>
          <p className="font-mono text-base font-semibold text-gray-800 break-all mt-2 bg-gray-200 px-2 py-1 rounded">
            sukhsevaafoundation@gmail.com
          </p>
           <p className="text-xs text-gray-500 mt-2">
            After paying, please fill the form above so we can send you a tax-deductible receipt.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex justify-center items-center p-4 transition-opacity duration-300 animate-fadeIn" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto transform transition-transform duration-300 animate-scaleIn" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 z-10">
          <CloseIcon className="w-7 h-7" />
        </button>
        {renderContent()}
      </div>
      {isHistoryVisible && <HistoryPlaceholderModal onClose={() => setIsHistoryVisible(false)} />}
       <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
          .animate-scaleIn { animation: scaleIn 0.2s ease-out forwards; }
        `}</style>
    </div>
  );
};

const SuccessView: React.FC<{onClose: ()=>void}> = ({ onClose }) => (
    <div className="p-12 text-center flex flex-col items-center">
        <CheckCircleIcon className="w-24 h-24 text-green-500 mb-6"/>
        <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
            Your generous contribution to Sukh Seva Foundation will help us create lasting change. A receipt for your donation will be sent to your email address.
        </p>
        <button onClick={onClose} className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors">
            Close
        </button>
    </div>
);

const FailureView: React.FC<{onRetry: ()=>void, onClose: ()=>void}> = ({ onRetry, onClose }) => (
    <div className="p-12 text-center flex flex-col items-center">
        <XCircleIcon className="w-24 h-24 text-red-500 mb-6"/>
        <h2 className="text-3xl font-bold mb-4">Payment Failed</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
            Unfortunately, we were unable to process your payment. Please check your details and try again. No amount has been deducted from your account.
        </p>
        <div className="flex space-x-4">
            <button onClick={onRetry} className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors">
                Try Again
            </button>
            <button onClick={onClose} className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors">
                Close
            </button>
        </div>
    </div>
);


export default DonationModal;