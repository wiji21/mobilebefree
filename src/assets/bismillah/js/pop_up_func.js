 $(window).load(function() {
                new $.popup({                
                    title       : '',
                    content     : '<a href="https://www.befreetour.com"><img src="https://i.unisa.edu.au/siteassets/staff/facilities/pictures/maintenance.png" alt="Image" class="pop_img"><p><id="pop_msg">공지사항 <br> 2017.05.15 정식오픈 예정입니다.<br>현재 공식 홈페이지 오픈 전 최종 점검 중이며, 아직 상품 결제가 불가능합니다.<br> 이용에 불편을드려 죄송합니다.<br>감사합니다. </p></a><small>Autoclose delay in 10 seconds.</small>', 
					html: true,
					autoclose   : true,
					closeOverlay:true,
					closeEsc: true,
					buttons     : false,
                    timeout     : 10000 
                });
            });