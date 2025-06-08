import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { LockClosedIcon } from '@heroicons/react/24/solid';

function Protection() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-blue-100 text-sm font-medium uppercase tracking-wide">
              Segurança da Conta
            </h2>
            <p className="text-2xl font-bold mt-1">Proteção ativa</p>
            <div className="flex items-center mt-3">
              <div className="security-badge bg-blue-500 text-white px-3 py-1 rounded-full flex items-center">
                <ShieldCheckIcon className="text-white size-4 mr-2" />
                <span className="text-xs">Verificado</span>
              </div>
            </div>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <LockClosedIcon className="size-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/10 px-6 py-3 text-sm">
        <p>Próxima verificação de segurança: 15/05/2025</p>
      </div>
    </section>
  );
}
export default Protection;
