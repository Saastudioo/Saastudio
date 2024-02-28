import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
            <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-4">
                  <Logo />
                </div>
                <div className="text-sm text-slate-300">
                  © Saastudio <span className="text-slate-500">-</span> All
                  rights reserved 2024
                </div>
              </div>
              {/* Social links */}
              <ul className="flex"></ul>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Legals</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://secret-sponge-95b.notion.site/Refund-policy-6271d2121a6b4855870558e83e216b88"
                  target="_blank"
                >
                  Refund policy
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://secret-sponge-95b.notion.site/Terms-Conditions-e63692dd4da64c71986be04ee2210724"
                  target="_blank"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://secret-sponge-95b.notion.site/Privacy-policy-c4da6b9e52d24817a012bea8cee758c7"
                  target="_blank"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
