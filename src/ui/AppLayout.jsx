import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import { useEffect, useState } from 'react';

function AppLayout() {
  const navigation = useNavigation();
  // eslint-disable-next-line no-unused-vars
  const isLoading = navigation.state === 'loading';
  const [darkMode, setDarkMode] = useState(false);

  useEffect(
    function () {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    [darkMode],
  );

  return (
    <div
      className={`grid h-screen grid-rows-[auto_1fr_auto] dark:bg-stone-600`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed right-0 top-0 border-none bg-yellow-200 p-4 text-2xl leading-4 bg-blend-darken hover:bg-yellow-100"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />

      {/* my-10 */}
      <div className=" overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
