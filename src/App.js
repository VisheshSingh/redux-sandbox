import CreateCustomer from './customer/CreateCustomer';
import Customer from './customer/Customer';
import AccountOperations from './account/AccountOperations';
import BalanceDisplay from './account/BalanceDisplay';
import { useSelector } from 'react-redux';

function App() {
  const fullname = useSelector((state) => state.customer.fullname);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullname ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
