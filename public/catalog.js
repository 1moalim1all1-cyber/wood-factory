const grid=document.querySelector('#catalogGrid'),filters=document.querySelectorAll('.catalog-filter');
let items=[],category='all';
const labels={kitchens:'مطابخ',doors:'أبواب',bedrooms:'غرف نوم',dressing:'دريسنج',office:'مكاتب',decor:'ديكورات',custom:'تفصيل خاص'};
function node(tag,className,content){const el=document.createElement(tag);if(className)el.className=className;if(content!=null)el.textContent=String(content);return el}
function render(){
 grid.replaceChildren();
 const shown=items.filter(p=>category==='all'||p.category===category);
 if(!shown.length){grid.append(node('p','catalog-empty',items.length?'مفيش منتجات في القسم ده حاليًا. تقدر تطلب تفصيل حسب المقاسات.':'الكتالوج لسه بيتجهز. تقدر تبعت طلب عرض سعر من قسم التواصل.'));return}
 shown.forEach(p=>{
 const card=node('article','catalog-card'),img=node('div','catalog-photo');
 if(p.image&&/^https:\/\//i.test(p.image)){const photo=document.createElement('img');photo.src=p.image;photo.alt=p.name||'منتج خشبي';photo.loading='lazy';photo.decoding='async';img.append(photo)}else img.append(node('span','catalog-placeholder','تصميم حسب الطلب'));
 const info=node('div','catalog-info');
 info.append(node('small','',labels[p.category]||'أعمال خشبية'),node('h3','',p.name||'منتج خشبي'),node('p','',p.description||p.material||'تفصيل حسب المقاسات والخامات'));
 const link=node('a','btn btn-primary','اطلب عرض سعر');link.href='#contact';link.addEventListener('click',()=>{const opt=[...document.querySelectorAll('#quoteForm [name="projectType"] option')].find(o=>o.textContent===labels[p.category]);if(opt)document.querySelector('#quoteForm [name="projectType"]').value=opt.value;const details=document.querySelector('#quoteForm [name="details"]');details.value='استفسار عن: '+(p.name||'منتج')+'\n'+details.value});
 info.append(link);card.append(img,info);grid.append(card);
 })
}
filters.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.category;filters.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render()}));
filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category==='all')));
let fetched=false;
async function loadCatalog(){if(fetched)return;fetched=true;try{const {products}=await import('./firebase.js');items=await products()}catch(e){console.warn('Catalog temporarily unavailable',e)}render()}
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){io.disconnect();loadCatalog()}},{rootMargin:'300px'});io.observe(document.querySelector('#catalog'))}else loadCatalog();
