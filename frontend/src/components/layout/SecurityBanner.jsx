import { ShieldExclamationIcon } from '@heroicons/react/24/solid';

function SecurityBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl shadow-lg text-white p-6 mt-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
            <ShieldExclamationIcon className="size-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Sua conta está segura!</h3>
            <p className="text-blue-200 text-sm mt-1">
              Proteção avançada contra fraudes ativada.
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <div className="bg-white/10 px-4 py-2 rounded-lg text-center">
            <p className="text-xs">Tempo restante</p>
            <p className="countdown-timer font-bold text-lg">5:00</p>
          </div>
          <button className="bg-white text-blue-800 px-4 py-2 rounded-lg font-medium">
            Continuar navegando
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecurityBanner;
