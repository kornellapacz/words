import { selectMenu } from '@root/src/store/menu';
import * as React from 'react';
import { useSelector } from 'react-redux';
import MenuCategory from './Category';
import { Menu as StyledMenu } from '@root/src/styled';

const Menu: React.FC = () => {
	const menu = useSelector(selectMenu);

	return (
		<nav>
			<StyledMenu>
				{menu.map((category) => (
					<MenuCategory category={category} key={category.name} />
				))}
			</StyledMenu>
		</nav>
	);
};

export default Menu;