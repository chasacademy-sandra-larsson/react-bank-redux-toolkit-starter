import { useState } from "react";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  //const [currency, setCurrency] = useState("USD");

  const handleOpenAccount = () => {}
  const handleCloseAccount = () => {}
  const handleWithdrawal = () => {}
  const handleDeposit = () => {}
  const handleRequestLoan = () => {}
  const handlePayLoan = () => {}

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Open Account</label>
          <button
          onClick={handleOpenAccount}
          disabled={isActive}
        >
          Open account
        </button>
        </div>
        <div>
          <label>Close Account</label>
          <button
          onClick={handleCloseAccount}
          disabled={!isActive}
        >
          Open account
        </button>
        </div>
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDepositAmount(e.target.value)
            }
          />
          {/* <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
        </select> */}
          {/* 
        <button onClick={handleDeposit} disabled={isLoading}>
          {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
        </button> */}
          <button onClick={handleDeposit}>
          depositAmount
        </button> 
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWithdrawalAmount(e.target.value)
            }
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLoanAmount(e.target.value)
            }
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLoanPurpose(e.target.value)
            }
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {/* {currentLoan > 0 && (
        <div>
          <span>
            Pay back ${currentLoan} ({currentLoanPurpose})
          </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      )} */}
      </div>
    </div>
  );
}

export default AccountOperations;
