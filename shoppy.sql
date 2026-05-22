use shoppy;
select database();
show tables;
select * from information_schema.views where table_schema = 'shoppy';
select * from member;
select * from product;
desc product;

-- 전체 상품 조회
select  pid,
        concat('images/', image) as image
from product;        

-- product + product_detailinfo 테이블 조인
select  p.pid,
		p.name,
		p.price,
		p.info,
		p.rate,
		concat('/images/', p.image) as image,
		p.img_list as imgList,
        json_object(
			"title_en", pd.title_en,  
			"title_ko", pd.title_ko,
			"list", pd.list
		) as detailInfo
	from product p, product_detailinfo pd
    where p.pid = pd.pid and p.pid = 1;
        

show tables;
select * from product_detailinfo;

--
select * from product_qna where pid = 1;
desc product_qna;


select 	qid,
		title,
        content,
		is_complete as isComplete,
        is_lock as isLock,
        id,
        pid,
        cdate
from product_qna
where pid = 1;


-- 
desc product_return;
select   rid,
		title,
        description,
        list
from product_return;

--
select * from member;
desc member;

select curdate() from dual;

--
use shoppy;
select database();
show tables;
select * from cart;
select cid from cart
	where pid = 1 and id = 'test00' and size= 'XS';

desc cart;    

select sum(qty) as qty from cart where id ='test00';
show tables;

select * from view_cartlist where id='test00';

select * from information_schema.views 
	where table_schema = 'shoppy';
show tables;
select * from orders;
select * from member; 
select * from cart;   


 

