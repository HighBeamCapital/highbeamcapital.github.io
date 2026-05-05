export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-zinc-100 font-medium mb-2">HighBeam Capital</p>
            <p className="text-sm">Investing in transformative companies.</p>
          </div>
<div className="grid grid-cols-3 gap-8 text-sm">
             <div>
               <p className="text-zinc-100 font-medium mb-2">Contact</p>
               <p className="text-zinc-400">highbeamcapital@gmail.com</p>
             </div>
             <div>
               <p className="text-zinc-100 font-medium mb-2">Location</p>
               <p className="text-zinc-400">Los Angeles, CA</p>
             </div>
             <div>
               <p className="text-zinc-100 font-medium mb-2">Social</p>
               <a
                 href="https://twitter.com/highbeamcapital"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-zinc-400 hover:text-zinc-50 transition-colors"
               >
                 @highbeamcapital
               </a>
             </div>
           </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-sm">
          &copy; {new Date().getFullYear()} HighBeam Capital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}