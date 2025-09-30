import { motion } from "framer-motion";

// Optional shadcn/ui imports (uncomment if available in your project)
// import { Button } from "@/components/ui/button";

export default function MulheresNaPolitica() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-sky-50 text-slate-900">
      {/* Container */}
      <header className="max-w-6xl mx-auto p-6 md:p-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
              MNP
            </div>
            <div className="text-lg font-semibold">Mulheres na Política</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#importancia">
              Importância
            </a>
            <a className="hover:underline" href="#estatisticas">
              Estatísticas
            </a>
            <a className="hover:underline" href="#como-atuar">
              Como Atuar
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md bg-white/60">☰</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              A importância da <span className="text-pink-600">mulher</span> na
              política
            </h1>
            <p className="mt-4 text-slate-700 max-w-xl">
              Mais representatividade garante decisões mais justas, políticas
              públicas mais inclusivas e democracia fortalecida. Conheça por que
              a participação feminina transforma instituições e a vida das
              pessoas.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="#como-atuar"
                className="px-4 py-2 rounded-lg bg-pink-600 text-white font-medium shadow"
              >
                Saiba como atuar
              </a>
              <a
                href="#estatisticas"
                className="px-4 py-2 rounded-lg bg-white border"
              >
                Ver estatísticas
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md md:max-w-lg rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Mulheres em debate político"
                src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Importance Section */}
      <section
        id="importancia"
        className="max-w-6xl mx-auto px-6 md:px-10 mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h3 className="text-xl font-semibold">Representatividade</h3>
            <p className="mt-3 text-slate-600">
              Quando mulheres ocupam cargos de decisão, políticas públicas
              refletem necessidades reais de crianças, idosos e trabalhadores.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h3 className="text-xl font-semibold">Qualidade da Democracia</h3>
            <p className="mt-3 text-slate-600">
              Democracias inclusivas são mais estáveis e justas. A diversidade
              reduz vieses e melhora a prestação de contas.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h3 className="text-xl font-semibold">Modelos e Inspiração</h3>
            <p className="mt-3 text-slate-600">
              Líderes mulheres inspiram outras a participar, rompendo barreiras
              culturais e ampliando horizontes.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Statistics */}
      <section
        id="estatisticas"
        className="max-w-6xl mx-auto px-6 md:px-10 mt-12"
      >
        <div className="bg-gradient-to-r from-pink-50 to-white rounded-2xl p-6 md:p-8 shadow-md">
          <h2 className="text-2xl font-bold">Estatísticas rápidas</h2>
          <p className="mt-2 text-slate-700">
            Dados globais e locais mostram crescimento, mas ainda há
            desigualdade em cargos de liderança.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow">
              <div className="text-3xl font-bold">
                <span className="text-pink-600">15%</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">
                De parlamentares no Brasil são mulheres.
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow">
              <div className="text-3xl font-bold">
                <span className="text-pink-600">30%</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">
                do fundo eleitoral para as candidaturas femininas, incentivando
                a candidatura de mulheres
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow">
              <div className="text-3xl font-bold">
                <span className="text-pink-600">30%</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Lei de Cotas de Gênero e políticas afirmativas, para aumentar a
                participação feminina e a implementação de políticas de Estado
                para a igualdade de gênero.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to get involved */}
      <section
        id="como-atuar"
        className="max-w-6xl mx-auto px-6 md:px-10 mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold">Como você pode ajudar</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                1. Apoie candidatas locais e campanhas que promovam igualdade.
              </li>
              <li>
                2. Participe de grupos/ONGs que fortalecem a liderança feminina.
              </li>
              <li>
                3. Incentive educação cívica e políticas públicas inclusivas.
              </li>
              <li>4. Vote e mobilize pessoas da sua comunidade.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold">Recursos rápidos</h3>
            <p className="mt-3 text-slate-700">
              Encontre organizações locais, cursos e eventos que fomentem a
              participação política feminina.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="px-3 py-2 rounded-md border text-sm"
                href="https://elasnopoder.org/"
                target="_blank"
              >
                Organizações
              </a>
              <a
                className="px-3 py-2 rounded-md border text-sm"
                href="https://www.escolavirtual.gov.br/curso/124"
                target="_blank"
              >
                Cursos
              </a>
              <a
                className="px-3 py-2 rounded-md border text-sm"
                href="https://www2.camara.leg.br/a-camara/estruturaadm/secretarias/secretaria-da-mulher/eventos"
                target="_blank"
              >
                Eventos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Mulheres na Política — Inspirando
            participação.{" "}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <strong>Trabalho Acadêmico - André Luis de Moraes</strong>
        </div>
      </footer>
    </div>
  );
}
