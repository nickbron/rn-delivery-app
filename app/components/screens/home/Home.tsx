import React from 'react'
import { Pressable, Text, View } from 'react-native'

import Header from '@/components/layout/Header'
import Layout from '@/components/layout/Layout'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import Banner from './banner/Banner'
import Categories from './categories/Categories'
import Products from './products/Products'

const Home = () => {
	const { navigate } = useTypedNavigation()
	return (
		<Layout>
			<Header />
			<Banner />
			<Categories />
			<Products />
		</Layout>
	)
}

export default Home
