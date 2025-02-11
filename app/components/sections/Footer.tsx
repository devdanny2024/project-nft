import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="px-4 py-12 bg-[#141414] border-t border-[#2A2A2A]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Stay in the loop</h3>
          <p className="text-sm text-[#808080] mb-4">
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
          </p>
          <div className="flex gap-2">
            <Input placeholder="Your email address" className="bg-[#1A1A1A] border-[#2A2A2A] focus:border-[#3A3A3A] transition-colors" />
            <Button className="bg-[#2E6EFF] hover:bg-[#2555CC] transition-colors">Sign Up</Button>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">Marketplace</h3>
          <ul className="space-y-2 text-sm text-[#808080]">
            <li className="hover:text-white transition-colors cursor-pointer">All NFTs</li>
            <li className="hover:text-white transition-colors cursor-pointer">Art</li>
            <li className="hover:text-white transition-colors cursor-pointer">Gaming</li>
            <li className="hover:text-white transition-colors cursor-pointer">Photography</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-[#808080]">
            <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-white transition-colors cursor-pointer">Support</li>
            <li className="hover:text-white transition-colors cursor-pointer">Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Join the community</h3>
          <div className="flex gap-4">
            <a href="https://x.com/Hashihiroio" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#1A1A1A] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Button>
            </a>
            <a href="https://discord.com/invite/opensea" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#1A1A1A] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
