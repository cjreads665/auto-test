describe("login-test",()=>{
    it("should validate page title", async ()=>{
        await browser.url("https://staging.d39f9wp1xoa2s7.amplifyapp.com")
        await expect(browser.getTitle()).toEqual("Bizpilot")
        
   

    })
})