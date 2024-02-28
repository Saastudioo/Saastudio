export default function Features04() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Why trust us?
            </h2>
            <p className="text-lg text-slate-400">
              Whether you're a small startup or a large enterprise, we have the
              perfect package to meet your requirements.
            </p>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800">
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-200 pb-6">
                  Website Management
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      className="shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                    </svg>
                    <h4 className="font-medium text-slate-50">Analytics</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Seamlessly update and manage website content with our
                    intuitive Content Management System.
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      className="shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z" />
                    </svg>
                    <h4 className="font-medium text-slate-50">SEO</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Our comprehensive keyword research and optimization
                    strategies ensure that your website attracts qualified
                    traffic and enhances organic search performance.
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      className="shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1ZM3 2h10v8H9v4H3V2Z" />
                    </svg>
                    <h4 className="font-medium text-slate-50">Integrations</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    From website builders, email marketing, booking system,
                    we've got that covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
