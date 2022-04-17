import React from 'react';
import SideNav from '../../components/sideNav';
import Header from '../../components/header';
import Markup from '../../components/markup';
import './styles.scss'

export default function MarkupPage() {
  return (
    <div>
      <Header />
      <div className="container_body">
      <SideNav />
      <Markup />
      </div>
    </div>
  )
}
