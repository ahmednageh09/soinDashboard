import React, { useEffect, useState } from 'react'
// import img from '../../assets/images/angular.jpg'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import { CButton } from '@coreui/react'
import { axiosInstance } from 'src/axiosConfig'
import { toast } from 'react-toastify'
import Modal from 'src/components/modal'

import '../products/products.scss'

export default function Products() {
  const [selector, setSelector] = useState('')
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sub_category, setSub_category] = useState([])
  const [selectedCategories, setSelectedCategories] = useState({})
  const [deliverySwitches, setDeliverySwitches] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [brand, setBrand] = useState([])
  const [catTitles, setCatTitles] = useState([])

  const fetchData = async () => {
    try {
      let response = await axiosInstance.get('/products')
      let data = response.data.data
      setProducts(data.products)
      setSub_category(data.sub_category)
      const brands = data.brands
      setBrand(brands)
      const initialSelectedCategories = {}
      const deliveryStatus = {}
      data.products.forEach((product) => {
        deliveryStatus[product.id] = product.is_free_shipping === '1'
        const categoryNumber = product.category_ids || []
        const category = data.sub_category[categoryNumber]

        if (category != '' || category != undefined) {
          initialSelectedCategories[product.id] = category || null
        }
      })
      setSelectedCategories(initialSelectedCategories)
      setDeliverySwitches(deliveryStatus)
    } catch {
      toast.error('Something went wrong, try later!')
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const handleCostChange = (productId, event) => {
    const newProducts = [...products]
    const index = newProducts.findIndex((product) => product.id === productId)
    newProducts[index].cost = event.target.value
    setProducts(newProducts)
  }
  const handlePriceChange = (productId, event) => {
    const newProducts = [...products]
    const index = newProducts.findIndex((product) => product.id === productId)
    newProducts[index].price_original = event.target.value
    setProducts(newProducts)
  }
  const handleNameChange = (productId, event) => {
    const newProducts = [...products]
    const index = newProducts.findIndex((product) => product.id === productId)
    newProducts[index].product_name = event.target.value
    setProducts(newProducts)
  }
  const handleStockChange = (productId, event) => {
    const newProducts = [...products]
    const index = newProducts.findIndex((product) => product.id === productId)
    newProducts[index].max_count = event.target.value
    setProducts(newProducts)
  }
  const handleDeliverySwitchChange = (productId, checked) => {
    setDeliverySwitches((prevSwitches) => ({
      ...prevSwitches,
      [productId]: checked,
    }))
  }
  const handleImageChange = (productId, event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      const newProducts = [...products]
      const index = newProducts.findIndex((product) => product.id === productId)
      newProducts[index].mainPhoto = reader.result
      setProducts(newProducts)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const updateProduct = async (product) => {
    try {
      setSelectedCategories((prevCategories) => ({
        ...prevCategories,
        [product.id]: product.category,
      }))

      const updatedProduct = {
        product_id: product.id,
        product_name: product.product_name,
        cost: product.cost,
        price: product.price_original,
        max_count: product.max_count.toString(),
        types: product.types,
        mainPhoto: product.mainPhoto,
        is_free_shipping: deliverySwitches[product.id],
        categories: selectedCategories[product.id].split(',')[0],
      }

      const data = await axiosInstance.post('/updateproduct', updatedProduct)
      fetchData()
      toast.success(data.data.message)
    } catch (error) {
      toast.error('Failed to update product, please try again')
    }
  }

  const performSearch = () => {
    if (searchTerm === '') {
      fetchData()
    } else {
      const filteredProducts = products.filter(
        (product) =>
          (product && (product.product_name ? product.product_name.includes(searchTerm) : false)) ||
          (product.category ? product.category.includes(searchTerm) : false),
      )
      setProducts(filteredProducts)
    }
  }
  useEffect(() => {
    performSearch()
  }, [searchTerm])

  const createNewProduct = () => {
    return {
      mainPhoto: '',
      product_name: 'new product name',
      is_free_shipping: false,
      category_ids: [],
      cost: '1',
      price: 1,
      price_original: 0,
      max_count: 1,
    }
  }
  const newProduct = async (product) => {
    try {
      const response = await axiosInstance.post('/saveproduct', product)
      const newProduct = response.data.data
      setProducts((prevProducts) => [...prevProducts, newProduct])
      fetchData()
      toast.info('New Product Created')
    } catch {
      console.log('Error saving product')
    }
  }
  const deleteProduct = async (productId) => {
    try {
      await axiosInstance.delete(`/product/delete/${productId}`)
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId))
      toast.success('Product deleted successfully')
    } catch {
      toast.error('Error deleting product')
    }
  }

  const filterByStatus = async (status) => {
    try {
      const data = await axiosInstance.get(`/product_status?code=${status}`)
      setProducts(data.data.data.products)
    } catch {
      console.log('error')
    }
  }
  const fetchByBrand = async (brandId) => {
    try {
      let response = await axiosInstance.get(`/product_brand?id=${brandId}`)
      let data = response.data.data
      setProducts(data.products)
      setSub_category(data.sub_category)
      setSelectedCategories({})
    } catch {
      toast.error('Something went wrong, try later!')
    }
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let response = await axiosInstance.get('/product/categories')
        let data = response.data.data
        let cats = []
        for (let [key, value] of Object.entries(data.cats)) {
          const childTitles = value.child.map((item) => ({
            title: item.title,
            id: item.id,
            sub_category: item.sub_category,
          }))
          cats.push({
            title: value.title,
            id: value.id,
            children: childTitles,
          })
        }
        setCatTitles(cats)
      } catch {
        toast.error('Something went wrong, try later!')
      }
    }

    fetchCategories()
  }, [])
  const filterByCat = async (catId) => {
    try {
      let response = await axiosInstance.get(`/product_category?category=${catId}`)
      let data = response.data.data
      setProducts(data.products)
      setSub_category(data.sub_category)
      setSelectedCategories({})
    } catch {
      toast.error('Something went wrong, try later!')
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between px-5">
        <div className="d-flex justify-content-around gap-3">
          {/* Filter Button */}
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#" className="withDown">
                Status
                <Dropdown.Menu className="down status">
                  <Dropdown.Item onClick={() => filterByStatus('all')}>All Products</Dropdown.Item>
                  <Dropdown.Item onClick={() => filterByStatus('sale')}>For Sale</Dropdown.Item>
                  <Dropdown.Item onClick={() => filterByStatus('discount')}>Discount</Dropdown.Item>
                  <Dropdown.Item onClick={() => filterByStatus('outofstock')}>
                    Out Of Stock
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>

              <Dropdown.Item href="#" className="withDown">
                Brands
                <Dropdown.Menu className="down brands">
                  {brand.map((brandObj, index) => (
                    <Dropdown.Item href="#" key={index} onClick={() => fetchByBrand(brandObj.id)}>
                      {brandObj.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item href="#" className="withDown">
                Categories
                <Dropdown.Menu className="down cats">
                  {catTitles.map((category, index) => (
                    <Dropdown.Item key={index} style={{ backgroundColor: 'white' }}>
                      <Dropdown.Item
                        variant="link"
                        id={`dropdown-toggle-${index}`}
                        style={{ fontWeight: 'bolder', backgroundColor: '#ebedef' }}
                        onClick={() => filterByCat(category.id)}
                      >
                        {category.title}
                      </Dropdown.Item>
                      {category.children.map((subCategory, index) => (
                        <Dropdown.Item key={index}>
                          <Dropdown.Item variant="link" onClick={() => filterByCat(subCategory.id)}>
                            {subCategory.title}
                          </Dropdown.Item>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Services Button */}
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Services
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/product/categories" className="withDown">
                Categories
              </Dropdown.Item>
              <Dropdown.Item href="#" className="withDown">
                Instagram Sync
              </Dropdown.Item>
              <Dropdown.Item href="#" className="withDown">
                Google Sync
              </Dropdown.Item>
              <Dropdown.Item href="#" className="withDown">
                Category Report
              </Dropdown.Item>
              <Dropdown.Item href="#" className="withDown">
                Product QR Code
              </Dropdown.Item>
              <Dropdown.Item href="#" className="withDown">
                Translate Labels
              </Dropdown.Item>
              <Dropdown.Item href="#" className="withDown">
                Color Group
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Search Prodcuts */}
          <div className="d-flex align-items-center">
            <input
              type="search"
              placeholder="Prodcut Name"
              onChange={(event) => setSearchTerm(event.target.value)}
              onBlur={performSearch}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  performSearch()
                }
              }}
              style={{
                outline: 'none',
                border: 'none',
                paddingLeft: '1rem',
                borderRadius: '12px 0 0 12px',
                height: '2rem',
                width: '10rem',
              }}
            />
            <CButton
              onClick={performSearch}
              style={{
                borderRadius: '0 20px 20px 0',
                left: '2px',
                height: '2rem',
                lineHeight: '14px',
              }}
            >
              Search
            </CButton>
          </div>
        </div>
        <CButton onClick={() => newProduct(createNewProduct())}>Add Product</CButton>
      </div>
      <div className="d-flex justify-content-around row">
        {/* Displaying Products */}
        {products.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <p>There are no products to show</p>
          </div>
        ) : (
          products.map((product) => (
            <>
              <div
                key={product.id}
                className="card"
                style={{ width: '19rem', height: 'fit-content', margin: '1.4rem' }}
              >
                <img
                  src={product.mainPhoto}
                  style={{
                    marginTop: '1rem',
                    borderRadius: '8px',
                    height: '18rem',
                    objectFit: 'cover',
                  }}
                  alt="Product Image"
                />
                <input
                  type="file"
                  id={`proImg-${product.id}`}
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageChange(product.id, e)}
                />
                <button
                  className="btn btn-info mt-1"
                  style={{ whiteSpace: 'nowrap', width: 'fit-content' }}
                  onClick={() => document.getElementById(`proImg-${product.id}`).click()}
                >
                  Add Image
                </button>
                <div className="card-body">
                  <div className="bg-light p-1 rounded">
                    <input
                      type="text"
                      className="card-title ps-2"
                      style={{
                        outline: 'none',
                        border: 'none',
                        background: 'transparent',
                        width: '100%',
                      }}
                      value={product.product_name}
                      onChange={(e) => {
                        handleNameChange(product.id, e)
                      }}
                    />
                  </div>
                  <Dropdown
                    className="m-2"
                    onSelect={(selectedKey) => {
                      var selectedSplit = selectedKey.split(',')
                      setSelectedCategories((prevCategories) => ({
                        ...prevCategories,
                        [product.id]: selectedSplit[0] + ',' + selectedSplit[1],
                      }))
                    }}
                  >
                    <Dropdown.Toggle
                      variant="secondary"
                      data-bs-toggle="tooltip"
                      title={selectedCategories[product.id] || 'Select Category'}
                      style={{
                        width: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      id="dropdown-basic"
                      activekey={selectedCategories[product.id]}
                    >
                      {typeof selectedCategories[product.id] == 'string'
                        ? selectedCategories[product.id]?.split(',')[1] ||
                          selectedCategories[product.id]
                        : selectedCategories[product.id] || 'Select Category'}
                    </Dropdown.Toggle>
                    {/* Categories Menu */}
                    <Dropdown.Menu className="cats">
                      {Object.entries(sub_category).map(([key, value], index) => (
                        <Dropdown.Item key={index} eventKey={key + ',' + value}>
                          {value}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <div className="d-flex justify-content-evenly">
                    <label htmlFor="cost" className="p-1">
                      Cost
                    </label>
                    <Form.Control
                      id="cost"
                      className="me-1"
                      style={{ width: '5.4rem' }}
                      type="number"
                      value={product.cost}
                      onChange={(e) => {
                        handleCostChange(product.id, e)
                      }}
                    />
                    <label htmlFor="price" className="p-1">
                      Price
                    </label>
                    <Form.Control
                      id="price"
                      type="number"
                      style={{ width: '5.5rem' }}
                      value={product.price_original}
                      onChange={(e) => handlePriceChange(product.id, e)}
                    />
                  </div>
                  <div
                    className="bg-light m-2 rounded"
                    style={{ width: 'fit-content', width: '50%' }}
                  >
                    <div className="card-title p-1">
                      Stock:{' '}
                      <input
                        style={{
                          width: '50%',
                          outLine: 'none',
                          border: 'none',
                          background: 'transparent',
                          paddingLeft: '0.5rem',
                        }}
                        type="number"
                        value={product.max_count}
                        onChange={(e) => handleStockChange(product.id, e)}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-evenly mt-3">
                    <Form.Check className="form-switch">
                      <Form.Check.Input
                        type="checkbox"
                        id={`delivery-switch-${product.id}`}
                        checked={deliverySwitches[product.id]}
                        onChange={(e) => handleDeliverySwitchChange(product.id, e.target.checked)}
                      />
                      <Form.Check.Label htmlFor={`delivery-switch-${product.id}`}>
                        Free Shipping
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <Dropdown>
                      <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            deleteProduct(product.id)
                          }}
                        >
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <CButton className="btn btn-info" onClick={() => setShowModal(true)}>
                      Details
                    </CButton>

                    <button className="btn btn-success" onClick={() => updateProduct(product)}>
                      Save
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal for product details */}
              <Modal
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleAction={async () => {
                  try {
                    await axiosInstance.post('/updateproduct')
                    toast.success('Send Success!')
                  } catch (error) {
                    toast.error('Failed, Please Try Again!')
                  }
                }}
              >
                <div>
                  <div>
                    <div>
                      <div>
                        <h5>Send User An Email</h5>
                      </div>
                      <div className="d-flex align-items-center row m-3 gap-3 ">
                        <Dropdown>
                          <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Select Shipping
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Charged Shipping</Dropdown.Item>
                            <Dropdown.Item href="#">Free Shipping</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <div>
                          <label htmlFor="subject">Subject: </label>
                          <input
                            id="subject"
                            // value={subject}
                            // onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="message">Message: </label>
                          <input
                            id="subject"
                            // value={subject}
                            // onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                              Product
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">Charged Shipping</Dropdown.Item>
                              <Dropdown.Item href="#">Free Shipping</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                              Country
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">Charged Shipping</Dropdown.Item>
                              <Dropdown.Item href="#">Free Shipping</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <input
                          id="subject"
                          // value={subject}
                          // onChange={(e) => setSubject(e.target.value)}
                        />
                        <input
                          id="subject"
                          // value={subject}
                          // onChange={(e) => setSubject(e.target.value)}
                        />
                        <Dropdown>
                          <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Select Shipping
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Charged Shipping</Dropdown.Item>
                            <Dropdown.Item href="#">Free Shipping</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                          <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Select Shipping
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Charged Shipping</Dropdown.Item>
                            <Dropdown.Item href="#">Free Shipping</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </>
          ))
        )}
      </div>
    </>
  )
}
