import Link from "next/link";

export default function MenuItems({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500">
        <Icon className='text-2xl sm:hidden' />
        <li className="list-none hidden text-sm sm:inline">{title}</li>
    </Link>
  )
}
