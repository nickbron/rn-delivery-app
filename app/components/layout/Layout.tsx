import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'

interface ILayout {
	showHeader?: boolean
	className?: string
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	showHeader = false,
	className
}) => {
	return (
		<View
			className={cn(
				'h-full w-full bg-white mt-16',
				!showHeader && 'mt-16 px-4',
				className
			)}
		>
			<ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
		</View>
	)
}

export default Layout
