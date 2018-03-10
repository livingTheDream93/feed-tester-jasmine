
$(function() {
   /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /*  it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* it loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url are defined and url are not empty',function(){
            for (const allFeed of allFeeds){
                expect(allFeed.url).toBeDefined();
                expect(allFeed.url).not.toBeNull();
            }
        });


        /* it loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name are defined and name are not empty',function(){
            for (const allFeed of allFeeds){
                expect(allFeed.name).toBeDefined();
                expect(allFeed.name).not.toBeNull();
            }
        });
    });


    
        describe('The menu',function(){
            let body =  document.querySelector('body');
            var menuIcon = document.querySelector(".menu-icon-link");
        /* it ensures the menu element is
         * hidden by default. 
         */
            it('should be hidden by default',function(){
                expect(body.className).toContain('menu-hidden');
            });
         /* it ensures the menu changes
          * visibility when the menu icon is clicked. This test
          *  have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
            it('visibility changes when menu icon is clicked',function(){
                menuIcon.click();
                expect(body.className).not.toContain('menu-hidden');
                menuIcon.click();
                expect(body.className).toContain('menu-hidden');
            });
         });

   
         describe('Initial Entries',function(){
        /* it ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        let container = document.getElementsByClassName('feed');
            beforeEach(function(done){
                loadFeed(0,function(){
                    done();
                });
            });
            it('to ensure that there is at least a single .entry element within the feed container',function(done){
                let ent = document.querySelector(".feed").getElementsByClassName("entry").length;
                expect(ent).toBeGreaterThan(0);
                done(); 
            });

            describe('New Feed Selection',function(){
        /* it ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.

         */
            let f1,f2;

            beforeEach(function(done) {
                loadFeed(0,function(){
                    f1 = document.querySelector('.feed').innerHTML;
                    loadFeed(1,function(){
                        done();
                    });
                });
            });
       
            it('when a new feed is loaded by the loadFeed function that the content actually changes',function(done){
                f2 = document.querySelector('.feed').innerHTML;
                expect(f1).not.toBe(f2);
                done();
            });
            
        });
    });
}());
