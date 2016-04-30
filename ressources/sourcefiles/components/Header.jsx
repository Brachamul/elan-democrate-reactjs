import React from 'react'
import Brand from '../components/Brand'

const Header = () => (
	<header>
		<MetaFrame/>
		<TabFrame/>
	</header>
)

const MetaFrame = () => (
	<div className="metaFrame">
		<div className="metaFrame__brand">
			<Brand/>
		</div>
		<a href="#search" className="metaFrame__icon">
			<i className="fa fa-search"></i>
		</a>
		<a href="#menu" className="metaFrame__icon">
			<i className="fa fa-ellipsis-v"></i>
		</a>
	</div>
)

const TabFrame = () => (
	<nav className="tabFrame">
		<a className="tabFrame__button active" data-target-tab="projet">
			<i className="tabFrame__button__icon fa fa-file-text"></i>
		</a>
		<a className="tabFrame__button" data-target-tab="compass">
			<i className="tabFrame__button__icon fa fa-compass"></i>
		</a>
		<a className="tabFrame__button" data-target-tab="trending">
			<i className="tabFrame__button__icon fa fa-hashtag"></i>
		</a>
	</nav>
)

export default Header