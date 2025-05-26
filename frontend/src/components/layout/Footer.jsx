import {ArrowDownIcon} from "@heroicons/react/24/outline"

function Footer() {
  return (
    <footer className="w-full flex px-[10rem] py-5 justify-between">
      <div className="flex flex-row">
        <p>in</p>
        <p>5080$</p>
        <p>out</p>
        <p>1000$</p>
      </div>

      <button className="flex flex-row align-center"><ArrowDownIcon className="size-6" /> SORT</button>

      <span>You Will be logout in 5:00 minutes</span>
    </footer>
  );s
}

export default Footer;