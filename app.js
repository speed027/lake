const ideas=[
 {id:1,cat:'AI',budget:'100만원 이하',tag:'AI · 업무자동화',title:'소상공인 맞춤형 AI 업무비서',desc:'예약, 문의 응대, 리뷰 관리를 한 번에 처리하는 업종별 자동화 서비스',score:94,cost:'50만원~',target:'직원 5인 이하 미용실·식당·스튜디오',first:'한 업종을 골라 사장님 5명을 인터뷰하고, 가장 반복적인 업무 하나를 노코드로 자동화해 보세요.'},
 {id:2,cat:'로컬',budget:'100만원 이하',tag:'LOCAL · CONTENT',title:'동네 사장님 숏폼 콘텐츠 스튜디오',desc:'촬영부터 편집, 업로드까지 방문형 월 구독으로 제공하는 콘텐츠 대행',score:89,cost:'80만원~',target:'온라인 홍보가 막막한 지역 자영업자',first:'반경 2km 안의 매장 3곳에 무료 샘플 영상 1개를 제안해 전환율을 확인하세요.'},
 {id:3,cat:'웰니스',budget:'500만원 이하',tag:'WELLNESS · PET',title:'반려동물 맞춤 건강 루틴 구독',desc:'연령과 생활 습관에 맞춘 영양·활동 미션을 매달 배송하는 케어 서비스',score:92,cost:'300만원~',target:'반려동물 건강 관리에 적극적인 2030 양육자',first:'수의사 자문을 받아 3가지 유형의 2주 루틴 PDF를 만들고 사전 신청을 받으세요.'},
 {id:4,cat:'교육',budget:'100만원 이하',tag:'EDU · SENIOR',title:'시니어를 위한 1:1 디지털 생활 코치',desc:'키오스크부터 모바일 뱅킹까지 일상 기술을 집으로 찾아가 알려주는 서비스',score:87,cost:'30만원~',target:'부모님의 디지털 적응을 돕고 싶은 4050 자녀',first:'지역 커뮤니티에 60분 체험 수업을 열고 가장 어려워하는 과제를 기록하세요.'},
 {id:5,cat:'친환경',budget:'1,000만원 이하',tag:'GREEN · B2B',title:'소형 매장 다회용기 순환 서비스',desc:'세척 부담 없이 회수와 재공급을 제공하는 동네 단위 다회용기 네트워크',score:84,cost:'700만원~',target:'포장 주문이 많은 카페와 샐러드 매장',first:'인접 매장 5곳과 회수 거점 1곳을 묶은 4주 파일럿의 손익을 계산하세요.'},
 {id:6,cat:'크리에이터',budget:'500만원 이하',tag:'CREATOR · COMMUNITY',title:'전문가의 지식을 파는 마이크로 클래스',desc:'현업 전문가의 실전 노하우를 90분 라이브 워크숍으로 상품화하는 플랫폼',score:86,cost:'150만원~',target:'작지만 명확한 문제를 해결하려는 직장인',first:'전문가 3명의 강의 주제를 랜딩페이지에 올리고 결제 의향을 먼저 측정하세요.'},
 {id:7,cat:'AI',budget:'500만원 이하',tag:'AI · COMMERCE',title:'온라인 셀러용 상세페이지 진단기',desc:'상품 URL만 넣으면 전환을 막는 카피와 구성을 찾아주는 AI 리포트',score:91,cost:'200만원~',target:'월 매출 3천만원 이하 스마트스토어 판매자',first:'상세페이지 20개를 수동 진단한 뒤 반복되는 개선 항목을 템플릿화하세요.'},
 {id:8,cat:'로컬',budget:'1,000만원 이하',tag:'LOCAL · EXPERIENCE',title:'빈 상가를 활용한 주말 취향 클럽',desc:'공실 공간과 지역 호스트를 연결해 소규모 체험을 여는 팝업 커뮤니티',score:81,cost:'600만원~',target:'새로운 취미와 관계를 찾는 2030 직장인',first:'공간 한 곳과 호스트 두 명을 섭외해 유료 주말 프로그램을 한 차례 열어보세요.'},
 {id:9,cat:'웰니스',budget:'100만원 이하',tag:'WELLNESS · TEAM',title:'10분 팀 리커버리 프로그램',desc:'점심시간 짧은 움직임과 마음 회복 루틴을 제공하는 기업용 웰니스 구독',score:85,cost:'40만원~',target:'번아웃과 팀 활력 저하를 고민하는 스타트업',first:'10명 규모 팀에서 2주간 무료 진행하고 참여율과 컨디션 변화를 기록하세요.'}
];
const categories=['전체','AI','로컬','웰니스','교육','친환경','크리에이터'];
const budgets=['전체','100만원 이하','500만원 이하','1,000만원 이하'];
let category='전체',budget='전체',offset=0;
let saved=new Set(JSON.parse(localStorage.getItem('idea-spring-saved')||'[]'));
const grid=document.querySelector('#ideaGrid');

function filterButtons(container,values,type){container.innerHTML=values.map(v=>`<button class="chip ${v==='전체'?'active':''}" data-${type}="${v}">${v}</button>`).join('')}
filterButtons(document.querySelector('#categoryFilters'),categories,'category');filterButtons(document.querySelector('#budgetFilters'),budgets,'budget');
function available(){return ideas.filter(i=>(category==='전체'||i.cat===category)&&(budget==='전체'||i.budget===budget))}
function render(){const all=available();const shown=all.length?Array.from({length:Math.min(6,all.length)},(_,n)=>all[(n+offset)%all.length]):[];grid.innerHTML=shown.length?shown.map(card).join(''):'<p>조건에 맞는 아이디어가 없어요. 필터를 바꿔보세요.</p>';document.querySelector('#resultCount').textContent=`총 ${all.length}개의 가능성 중 ${shown.length}개를 보여드리고 있어요.`;renderSaved()}
function card(i){return `<article class="card"><div class="card-top"><span class="tag">${i.tag}</span><button class="save-btn ${saved.has(i.id)?'saved':''}" data-save="${i.id}" aria-label="저장">${saved.has(i.id)?'♥':'♡'}</button></div><h3>${i.title}</h3><p>${i.desc}</p><div class="metrics"><div><small>시장 매력도</small><b>${i.score} / 100</b></div><div><small>예상 초기 비용</small><b>${i.cost}</b></div></div><button class="detail-btn" data-detail="${i.id}">아이디어 자세히 보기 →</button></article>`}
document.addEventListener('click',e=>{const c=e.target.closest('[data-category]'),b=e.target.closest('[data-budget]'),s=e.target.closest('[data-save]'),d=e.target.closest('[data-detail]'),scroll=e.target.closest('[data-scroll]');if(c){category=c.dataset.category;activate(c)}if(b){budget=b.dataset.budget;activate(b)}if(s){toggleSave(+s.dataset.save)}if(d){openDetail(+d.dataset.detail)}if(scroll)document.querySelector('#'+scroll.dataset.scroll).scrollIntoView({behavior:'smooth'})});
function activate(el){[...el.parentElement.children].forEach(x=>x.classList.remove('active'));el.classList.add('active');offset=0;render()}
function toggleSave(id){saved.has(id)?saved.delete(id):saved.add(id);localStorage.setItem('idea-spring-saved',JSON.stringify([...saved]));render()}
function renderSaved(){const el=document.querySelector('#savedList');const list=ideas.filter(i=>saved.has(i.id));el.innerHTML=list.length?list.map(i=>`<div class="saved-row"><b>${i.title}</b><button data-save="${i.id}">삭제</button></div>`).join(''):'<p>아직 저장한 아이디어가 없어요. 하트 버튼으로 담아보세요.</p>'}
document.querySelector('#refreshBtn').onclick=()=>{offset++;render();grid.animate([{opacity:.2,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:350})};
const dialog=document.querySelector('#detailDialog');function openDetail(id){const i=ideas.find(x=>x.id===id);document.querySelector('#dialogContent').innerHTML=`<span class="dialog-tag">${i.tag}</span><h2 class="dialog-title">${i.title}</h2><p class="dialog-lead">${i.desc}</p><div class="dialog-box"><h4>누구를 위한 사업인가요?</h4><p>${i.target}</p></div><div class="dialog-box"><h4>이번 주 첫 실행</h4><p>${i.first}</p></div><button class="dialog-action" data-save="${i.id}">${saved.has(i.id)?'저장에서 빼기':'이 아이디어 저장하기'}</button>`;dialog.showModal()}
document.querySelector('.dialog-close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});render();
