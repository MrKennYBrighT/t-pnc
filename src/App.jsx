import { useState } from 'react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ArrowDownTrayIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

function App() {
  const [toDoOpen, setToDoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white">
        <div className="flex items-center justify-between px-4 py-3">
          <Bars3Icon className="h-6 w-6" />
          <h1 className="header-title">ACCOUNTS</h1>
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>

        {/* To Do Dropdown - Centered */}
        <div className="flex justify-center px-4 pb-3">
          <button
            onClick={() => setToDoOpen(!toDoOpen)}
            className="todo-pill"
          >
            <div className="todo-badge">2</div>
            <span>To Do</span>
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform ${toDoOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Account 1: CHECKING X1234 */}
      <section className="px-4 py-5 bg-white border-b border-gray-200">
        <h2 className="account-header text-center">CHECKING X1234</h2>
        <div className="mt-2 flex justify-between items-center gap-4">
  <div className="text-left">
    <p className="account-balance-label">Available Balance</p>
    <p className="account-balance-amount">$49,257.13</p>
  </div>
  <button className="fund-button">FUND</button>
</div>

        <div className="divider-gradient"></div>
      </section>

      {/* Account 2: CHECKING X2958 */}
      <section className="px-4 py-5 bg-white border-b border-gray-200">
        <h2 className="account-header text-center">CHECKING X2958</h2>
        <div className="mt-2 flex justify-center items-center gap-4">
          <div className="text-center">
            <p className="account-balance-label">Balance</p>
            <p className="account-balance-amount">$115,000.57</p>
          </div>
        </div>
        <div className="divider-gradient"></div>
      </section>

      {/* Menu Items */}
      <div className="mt-6 space-y-0 px-4 bg-white">
{/* Manage Direct Deposit */}
<button className="menu-item">
  <div className="flex items-center gap-3">
    <div className="menu-icon-container">
      <img src="/deposit.png" alt="Direct Deposit" className="h-6 w-6" />
    </div>
    <div className="text-left flex-1">
      <p className="menu-title">Manage Direct Deposit</p>
      <p className="menu-subtitle">
        Get your paychecks deposited into a PNC account, with a few quick steps.
      </p>
    </div>
  </div>
  <ChevronDownIcon className="chevron-right" />
</button>


{/* Send Money with Zelle */}
<button className="menu-item">
  <div className="flex items-center gap-3">
    <div className="menu-icon-zelle">
      <img src="/zelle.svg" alt="Zelle" className="h-6 w-6" />
    </div>
    <div className="text-left flex-1">
      <p className="menu-title">Send Money With Zelle®</p>
    </div>
  </div>
  <ChevronDownIcon className="chevron-right" />
</button>


        {/* My Offers & Products */}
        <button className="menu-item">
          <div className="flex items-center gap-3">
            <div className="menu-icon-container">
              <CreditCardIcon className="h-6 w-6 text-blue-700" />
            </div>
            <div className="text-left flex-1">
              <p className="menu-title">My Offers & Products</p>
            </div>
          </div>
          <ChevronDownIcon className="chevron-right" />
        </button>

        {/* FICO Score */}
<button className="menu-item">
  <div className="flex items-center gap-3">
    <div className="menu-icon-container">
      <img src="/credit-score.png" alt="FICO Score" className="h-6 w-6" />
    </div>
    <div className="text-left flex-1">
      <p className="menu-title">FICO® SCORE</p>
    </div>
  </div>
  <ChevronDownIcon className="chevron-right" />
</button>

      </div>
    </div>
  );
}

export default App;