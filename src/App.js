import './App.css'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function App() {
  return (
    <div className='App'>
<div className="header_logo">
<LocalGroceryStoreRoundedIcon fontSize='large' className='headerLogo_image'/>
<h2 className="headertitle">eShop</h2>
</div>
<div className="header__search">
<input type="text" className='header_searchInput'/>
<SearchRoundedIcon className='search_icon'/>

</div>
<div className="header_nav">
  <div className="nav_item">
<span className="item_lineOne">Hello Guest</span>
<span className="item_lineTwo">Sign IN</span>
  </div>

  <div className="nav_item">
  <span className="item_lineOne">Your</span>
<span className="item_lineTwo">Shop</span>
  </div>

  <div className="nav_item">
  <ShoppingBasketRoundedIcon fontSize='large'/>
<span className="item_lineTwo">0</span>
  </div>
    </div>
    </div>
  );
}

export default App;
