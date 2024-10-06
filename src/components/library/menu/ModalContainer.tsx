'use client';
import React from 'react';
import {
	DrawerContent,
	DrawerContentProps,
	MenuListProps,
	ModalContent,
	ModalContentProps,
} from '@chakra-ui/react';

type MenuContainerProps = ModalContentProps &
	DrawerContentProps &
	MenuListProps & {
		children: React.ReactNode;
		isSmallScreen?: boolean;
	};

const ModalContainer: React.FC<MenuContainerProps> = ({ children, isSmallScreen, ...props }) => {
	if (isSmallScreen)
		return (
			<DrawerContent
				borderTopRadius='2xl'
				h='85vh'
				bg='menu.light'
				_dark={{
					bg: 'menu.dark',
				}}
				{...props}>
				{children}
			</DrawerContent>
		);
	else
		return (
			<ModalContent
				boxShadow='lg'
				borderRadius='2xl'
				bg='menu.light'
				_dark={{
					bg: 'menu.dark',
				}}
				{...props}>
				{children}
			</ModalContent>
		);
};

export default ModalContainer;
