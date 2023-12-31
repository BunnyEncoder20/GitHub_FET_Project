import { useState, useEffect } from 'react'

import styles from './Listing.module.css'
import logo from '../../assets/Login-musicartlogo.png'
import girlWithHeadPhones from '../../assets/discountbanner.png'
import searchIcon from '../../assets/search-icon.svg'
// import searchIcon2 from '../../assets/search-icon2.png'
import gridicon from '../../assets/grid.png'
import gridicon_active from '../../assets/grid-active.svg'
import listicon from '../../assets/list.png'
import listicon_active from '../../assets/list-active.png'

import axios from 'axios';

import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { GridView } from '../Listings/GridView'
import { ListView } from '../Listings/ListView'

import { Link, useNavigate } from "react-router-dom"

// Bootstrap imports
import { Dropdown, DropdownButton, ToggleButtonGroup, ToggleButton, Breadcrumb, Button, Container } from 'react-bootstrap';

// Importing breadcrumb Links 
const homeLink = `${process.env.REACT_APP_BASE_URL}/`;


export const Listing = () => {

    // for the view buttons
    const [checked, setChecked] = useState(false);
    const [view, setView] = useState('grid');

    // For fetched the items from the db 
    const [items, setItems] = useState([]);

    // for Searching
    const [searchQuery, setSearchQuery] = useState('');

    // for Filtering 
    const [filters, setFilters] = useState({
        headphoneType: null,
        company: null,
        color: null,
        price: null,
      });
    

    const handleViewChange = (val) => {
        setView(val)
        console.log("view set to : ", val)
    }

    //Searching 
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const fetchData = () => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/listing`, { params: { search: searchQuery } })
            .then((res) => {
                console.log("Fetching DB data from server...\n")
                // console.log(res.data.items)
                setItems(res.data.items)
            })
            .catch((err) => console.log("[ERROR] : in fetching items from db....\n", err))
    }
    

    

    useEffect(() => {
        fetchData() ;
    }, [searchQuery]);     // empty dependancy array ensures that this runs only once on mount  

  

    

    // filtering


    // Sorting 

    return (
        <>
            {/* <h1> Listing Page</h1> */}

            <Header />

            <Container fluid className={styles.biggest}>
                {/* Homebar & breadcrumb */}
                <div className={styles.toppart}>
                    <h1 className={styles.header}>
                        <img src={logo} alt="Logo" /> {' '}
                        Musicart
                    </h1>
                    <Breadcrumb className='breadcrumb'>
                        <Breadcrumb.Item active >Home</Breadcrumb.Item>
                        {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
                    </Breadcrumb>
                </div>

                {/* Discount Banner */}
                <Container fluid className={styles.discount} >
                    <div className={styles.lhs}>
                        <h1>Grab upto 50% off on <br /> Selected headphones</h1>
                        <Button href="#" className={styles.btn}>Buy Now</Button>
                    </div>

                    <div className={styles.rhs}>
                        <img src={girlWithHeadPhones} alt="Banner Img" />
                    </div>
                </Container>

                {/* Search Bar */}
                <div className={styles.search_bar}>
                    <button type="button">
                        <img src={searchIcon} alt="search icon" />
                    </button>
                    <input type="text" placeholder="Search Product" onInput={handleSearchChange}/>
                </div>

                {/* buttons for view, filter, sort */}
                <Container fluid className={styles.functionalityContainer}>

                    <span className={styles.view_filter}>
                        {/* views */}
                        <span className={styles.views}>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton id="tbg-radio-1" value={'grid'} onChange={() => handleViewChange('grid')} className={styles.view_btns}>
                                    <img src={view === 'grid' ? gridicon_active : gridicon} alt="Grid View" />
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" value={'list'} onChange={() => handleViewChange('list')} className={styles.view_btns}>
                                    <img src={view === 'list' ? listicon_active : listicon} alt="List View" />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </span>

                        {/* filters */}
                        <span className={`${styles.filters} filters`}>

                            {/* headphone types */}
                            <Dropdown data-bs-theme="dark">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Headphone Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" active>
                                        Featured
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        In-ear headphones
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        On-ear headphones
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">
                                        Over-ear headphones
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Company */}
                            <Dropdown data-bs-theme="dark">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Company
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" active>
                                        featured
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" active>
                                        JBL
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Sony
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        BoAt
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">
                                        Zebronics
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">
                                        Marshall
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">
                                        Ptron
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Company */}
                            <Dropdown data-bs-theme="dark">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Color
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" active>
                                        featured
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" active>
                                        Blue
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Black
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        White
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">
                                        Brown
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Price */}
                            <Dropdown data-bs-theme="dark">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Price
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" active>
                                        featured
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        ₹0 - ₹1,000
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        ₹1,000 - ₹10,000
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">
                                        ₹10,000 - ₹20,000
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </span>
                    </span>


                    {/* sorting */}
                    <span className="sorts">
                        <Dropdown data-bs-theme="dark" >
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                Sort By : Featured
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" active>Featured</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Price : Low to High</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Price High to Low</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Name : A to Z</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Name : Z to A</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>

                </Container>

                {/* Listing */}
                <Container fluid className={styles.listing}>
                    {view === 'grid' ? (
                        <GridView items={items} />
                    ) : (
                        <ListView items={items} />
                    )}
                </Container>
            </Container>

            <Footer />
        </>
    );
}

