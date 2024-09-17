import React from 'react'
import { LuFacebook, LuHeart, LuInstagram } from 'react-icons/lu'


const Footer = () => {
  return (
    <footer className="footer items-center p-4 PrimaryBg subtitleColor btnFont">
  <aside className="items-center grid-flow-col text-lg">
    <p>Hecho con </p><LuHeart /><p>por - Pocket Invite</p>
  </aside> 
  <nav className="grid-flow-col gap-4 place-self-center justify-self-end">
    <a href='https://www.instagram.com/pocketinvite?igsh=OHVucjNobnlhYTZw'><LuInstagram size="24" /></a>
    <a href='https://web.facebook.com/profile.php?id=61556188590051'><LuFacebook size="24" /></a>
  </nav>
</footer>
  )
}

export default Footer