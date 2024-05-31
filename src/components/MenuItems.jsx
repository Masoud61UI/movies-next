import Link from "next/link";

export default function MenuItems({ title, address, Icon }) {
  return (
    <Link href={address} className="transition duration-180 ease-out hover:ease-in hover:text-amber-500">
        <Icon className='text-2xl sm:hidden' />
        <li className="list-none hidden text-sm sm:inline">{title}</li>
    </Link>
  )
}
