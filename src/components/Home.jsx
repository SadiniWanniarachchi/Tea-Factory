function Home() {
    
    return (
    <BrowserRouter>

<Routes>
				<Route path="/" element={<UserLayout />}>

					<Route index element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/product-list" element={<ProductList />} />
					<Route path="/contactus" element={<ContactUs />} />

					<Route
						path="/product-description/:id"
						element={<ProductDescription />}
					/>

                    <Route path="/cart" element={<CartPage />} />
                    
                    </Route>

</Routes>
</BrowserRouter>

);
}

export default Home;