import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { RectangleGroupIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div>
      <div
        className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      >
        <RectangleGroupIcon className="h-12 w-12 rotate-[45deg]" />
        <p className="text-[40px]">Cashin</p>
      </div>
    </div>
  );
}
