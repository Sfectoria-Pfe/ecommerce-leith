import React, { Component } from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { IconButton} from '@mui/material';

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__left'>
            <img src="https://images.squarespace-cdn.com/content/v1/645e07defcc71e2167a143b1/5ce3d1b7-3545-4295-8008-2ff3a46ab75d/Leith+logo-yellow.png"
              alt="mylogo"/>
            <div className='header__input'>
                <SearchIcon/>
                <input type='text' placeholder='Search Facebook' />
            </div>
        </div>
        <div className='header__middle'>
          <div className='header__option header__option--active'>
            <HomeIcon fontSize='large'/>
          </div>
         
          <div className='header__option'>
            <StorefrontIcon fontSize='large'/>
          </div>
          <div className='header__option'>
            <SupervisedUserCircleIcon fontSize='large'/>
          </div>
          
        </div>
        <div className='header__right'>
         
          <IconButton>
            <AddShoppingCartIcon/>
          </IconButton>
          <IconButton>
            <ExitToAppIcon/>
          </IconButton>
        </div>
    </div>
    )
  }
}
