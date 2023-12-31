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
import removeicon from '../../assets/remove.png'

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

    // *********************
    //       States
    // *********************

    // for the view buttons
    const [checked, setChecked] = useState(false);
    const [view, setView] = useState('grid');

    // For fetched the items from the db 
    const [items, setItems] = useState([]);

    // for Searching
    const [searchQuery, setSearchQuery] = useState('');

    // for Filtering 
    const [filters, setFilters] = useState({
        itype: null,
        ibrand: null,
        icolor: null,
        iprice: null
    });

    // for sorting : 
    const [sortingOption, setSortingOption] = useState('featured');




    // *********************
    //       Controllers
    // *********************
    useEffect(() => {
        fetchData();
    }, [searchQuery, filters, sortingOption]);     // empty dependancy array ensures that this runs only once on mount  


    const handleViewChange = (val) => {
        setView(val)
        console.log("view set to : ", val)
    }

    //Searching 
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    // filtering 
    const handleFilterChange = (filterType, key) => {
        console.log('Previous Filters:', filters);
        console.log('Changing:', filterType, 'to', key);
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: key,
        })
        );
    };

    // Sorting 
    const handleSortingChange = (sorting) => {
        setSortingOption(sorting)
    }



    // Sending request to server 
    const fetchData = async () => {
        console.log('Search : ', searchQuery)
        console.log('filter : ', filters)
        console.log('sort : ', sortingOption)

        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/listing`, { params: { search: searchQuery, filter: filters, sort:sortingOption } })
            .then((res) => {
                console.log("Fetching DB data from server...\n")
                // console.log(res.data.items)
                setItems(res.data.itemsArr)
            })
            .catch((err) => console.log("[ERROR] : in fetching items from db....\n", err))
    }



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
                    <input type="text" placeholder="Search Product" onInput={handleSearchChange} />
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
                            <Dropdown data-bs-theme="dark" onSelect={(key) => {
                                handleFilterChange('itype', key);
                            }}>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Headphone Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="">
                                        Featured
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="In-ear headphone">
                                        In-ear headphones
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="On-ear headphone">
                                        On-ear headphones
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="Over-ear headphone">
                                        Over-ear headphones
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Company */}
                            <Dropdown data-bs-theme="dark" onSelect={(key) => {
                                handleFilterChange('ibrand', key);
                            }}>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Company
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="">
                                        featured
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="JBL">
                                        JBL
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="Sony">
                                        Sony
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="boAt">
                                        BoAt
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="Zebronics">
                                        Zebronics
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="Marshall">
                                        Marshall
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="Ptron">
                                        Ptron
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Company */}
                            <Dropdown data-bs-theme="dark" onSelect={(key) => {
                                handleFilterChange('icolor', key);
                            }}>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Color
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="">
                                        featured
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="Blue">
                                        Blue
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="Black">
                                        Black
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="White">
                                        White
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="Brown">
                                        Brown
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Price */}
                            <Dropdown data-bs-theme="dark" onSelect={(key) => {
                                handleFilterChange('iprice', key);
                            }}>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Price
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="">
                                        featured
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="0 1000">
                                        ₹0 - ₹1,000
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1000 10000">
                                        ₹1,000 - ₹10,000
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="10000 20000">
                                        ₹10,000 - ₹20,000
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* <Button variant="primary">
                                { filter != null ? (
                                    img
                                ) : () }
                            </Button> */}
                        </span>
                    </span>


                    {/* sorting */}
                    <span className="sorts">
                        <Dropdown data-bs-theme="dark" onSelect={ (key) => {
                            handleSortingChange(key) ;
                        }}>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                Sort By : Featured
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="">Featured</Dropdown.Item>
                                <Dropdown.Item eventKey="l2h">Price : Low to High</Dropdown.Item>
                                <Dropdown.Item eventKey="h2l">Price High to Low</Dropdown.Item>
                                <Dropdown.Item eventKey="a2z">Name : A to Z</Dropdown.Item>
                                <Dropdown.Item eventKey="zta">Name : Z to A</Dropdown.Item>
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

