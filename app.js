const lessons = [
  {id:1,cat:'AI 기초',title:'AI는 무엇을 하는 걸까요?',desc:'인공지능을 어렵지 않은 말로 이해하고, 주변에서 만나는 AI를 찾아봐요.',time:'5분',icon:'✳',color:'mint',level:'첫걸음',body:'AI(인공지능)는 사람의 학습·판단과 비슷한 일을 컴퓨터가 하도록 만든 기술을 넓게 부르는 말이에요. 사진 속 사물을 알아보거나, 문장을 번역하거나, 질문에 답하는 일이 대표적이에요. AI라고 해서 사람처럼 모든 것을 이해하는 건 아니고, 학습한 데이터와 맡은 작업에 따라 잘하는 일이 달라요.',quiz:'스마트폰 사진 앱이 얼굴을 찾아 앨범을 정리해요. AI의 활용 사례일까요?',answer:'네. 사진 속 특징을 찾아 사람의 얼굴을 구분하는 인공지능 기능이에요.'},
  {id:2,cat:'AI 기초',title:'생성형 AI는 어떻게 답할까요?',desc:'글, 그림, 음악을 새로 만들어내는 생성형 AI의 기본 원리를 알아봐요.',time:'6분',icon:'✧',color:'peach',level:'첫걸음',body:'생성형 AI는 많은 예시에서 패턴을 배운 뒤, 입력된 요청에 어울리는 결과를 만들어내요. 언어 모델은 앞에 나온 문맥을 바탕으로 다음에 올 말의 확률을 계산해 문장을 이어갑니다. 그래서 답변이 자연스러워도 사실 확인이 필요한 경우가 있어요.',quiz:'생성형 AI의 문장이 자연스러우면 내용도 언제나 정확할까요?',answer:'아니요. 자연스러운 문장과 사실의 정확성은 달라요. 날짜, 숫자, 중요한 정보는 따로 확인하세요.'},
  {id:3,cat:'AI 기초',title:'AI가 잘하는 일, 어려워하는 일',desc:'AI에게 맡기면 좋은 일과 직접 확인해야 할 일을 나눠봐요.',time:'5분',icon:'◒',color:'lilac',level:'첫걸음',body:'AI는 초안 만들기, 긴 글 요약, 다양한 아이디어 제안처럼 반복적이고 패턴이 있는 일을 빠르게 도와줄 수 있어요. 하지만 최신 정보, 개인의 맥락, 중요한 판단은 틀리거나 놓칠 수 있습니다. 결과를 그대로 쓰기보다 사람이 목적에 맞게 살펴보고 고치는 과정이 필요해요.',quiz:'AI가 만든 중요한 계약 조항을 검토 없이 그대로 사용해도 될까요?',answer:'아니요. 중요한 결정과 전문 영역에서는 정확한 자료와 자격을 갖춘 전문가를 통해 확인해야 해요.'},
  {id:4,cat:'프롬프트',title:'원하는 답에 가까운 질문 만들기',desc:'막연한 부탁에 목적과 조건을 더해 결과를 개선하는 법을 배워요.',time:'5분',icon:'✎',color:'peach',level:'초급',body:'프롬프트는 AI에게 입력하는 요청이나 지시예요. “글 써줘” 대신 “초등학생 학부모에게 보낼 소풍 안내문을, 친근한 말투로 5문장 이내에 써줘”라고 하면 목적, 대상, 말투, 길이가 분명해져요. 한 번에 완벽하게 쓰기보다 결과를 보고 추가로 요청해도 괜찮아요.',quiz:'좋은 질문에 추가하면 도움이 되는 정보 한 가지를 골라보세요.',answer:'누가 읽을지, 무엇을 원하는지, 어떤 형식이나 길이를 원하는지 알려주면 도움이 돼요.'},
  {id:5,cat:'프롬프트',title:'AI에게 역할과 독자를 알려주기',desc:'누구의 관점으로, 누구를 위해 답할지 알려주는 방법을 익혀봐요.',time:'5분',icon:'◎',color:'mint',level:'초급',body:'AI에게 역할과 독자를 알려주면 답의 방향을 구체화할 수 있어요. “여행을 잘 아는 안내자처럼, 걷기가 불편한 부모님을 위해 쉬운 동선을 중심으로 설명해줘”처럼 써볼 수 있습니다. 역할을 지정한다고 해서 실제 전문가의 검토가 대신되는 건 아니에요.',quiz:'“누구에게 보여줄 내용인지”를 알려주면 무엇이 좋아질까요?',answer:'독자에게 알맞은 단어, 설명의 깊이, 말투를 고르는 데 도움이 돼요.'},
  {id:6,cat:'프롬프트',title:'결과물의 형식까지 부탁하기',desc:'표, 목록, 이메일처럼 원하는 모양을 명확히 전달해 봐요.',time:'4분',icon:'▤',color:'lilac',level:'초급',body:'같은 내용이라도 표, 체크리스트, 짧은 메시지 등 어떤 형태로 받느냐에 따라 쓰기 편리함이 달라져요. “장소·예산·이동시간을 열로 둔 표로 정리해줘”처럼 결과물의 형태와 포함할 항목을 함께 말해보세요. 결과가 길다면 분량 제한도 덧붙일 수 있어요.',quiz:'여러 일정의 시간과 장소를 비교하고 싶을 때 어떤 형식을 요청하면 좋을까요?',answer:'시간과 장소를 열로 둔 표를 요청하면 빠르게 비교할 수 있어요.'},
  {id:7,cat:'실전 활용',title:'긴 글을 핵심만 요약하기',desc:'요약할 글과 원하는 분량을 정해 읽는 시간을 아껴봐요.',time:'5분',icon:'≋',color:'mint',level:'초급',body:'요약을 부탁할 때는 글의 범위와 요약 목적, 분량을 알려주세요. 예를 들어 “아래 회의 메모에서 결정 사항과 담당자만 뽑아 체크리스트로 정리해줘”라고 할 수 있어요. 원문에 없던 내용이 섞이지 않았는지 결과와 원문을 대조해 보세요.',quiz:'회의 메모에서 담당자와 할 일만 보고 싶다면 무엇을 요청하면 좋을까요?',answer:'결정 사항과 담당자를 분리해 체크리스트로 정리해달라고 요청할 수 있어요.'},
  {id:8,cat:'실전 활용',title:'글쓰기 첫 초안 빠르게 만들기',desc:'이메일이나 안내문 초안을 만든 다음 내 말투로 다듬어봐요.',time:'5분',icon:'✉',color:'peach',level:'초급',body:'AI에게 글의 목적, 독자, 꼭 들어갈 내용, 원하는 말투를 알려주면 첫 초안을 만들 수 있어요. 초안은 시작점으로 활용하세요. 사실, 날짜, 이름을 확인하고 실제로 내가 전달하고 싶은 뜻이 담겼는지 직접 다듬으면 더 나은 결과가 됩니다.',quiz:'AI가 만든 이메일 초안을 보내기 전에 무엇을 확인해야 할까요?',answer:'받는 사람과 날짜, 사실이 맞는지 확인하고 내 의도에 맞게 말투를 다듬어요.'},
  {id:9,cat:'실전 활용',title:'아이디어를 여러 방향으로 넓히기',desc:'AI를 브레인스토밍 파트너로 활용하고 내 기준으로 골라봐요.',time:'5분',icon:'✦',color:'lilac',level:'초급',body:'아이디어가 막힐 때 AI에게 여러 방향의 선택지를 요청해보세요. 문제와 대상, 이미 해본 방법, 지켜야 할 조건을 알려주면 더 쓸모 있는 초안을 얻기 쉬워요. 제안은 정답이 아니므로 비용, 시간, 내 상황에 맞춰 직접 비교하고 고르세요.',quiz:'AI가 아이디어 10개를 제안하면 무엇이 다음 단계일까요?',answer:'내 조건과 목표에 맞는 것을 골라 실제 가능성과 필요한 정보를 확인해요.'}
];

const progressKey='ai-hanip-completed-v1';
const practiceKey='ai-hanip-practice-v1';
let completed=new Set(JSON.parse(localStorage.getItem(progressKey)||'[]'));
let filter='전체';
const grid=document.querySelector('#lessonGrid');
const safeText=(value)=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderLessons(){
  const list=lessons.filter(l=>filter==='전체'||l.cat===filter);
  grid.innerHTML=list.map(l=>`<article class="lesson-card ${completed.has(l.id)?'is-done':''}"><div class="lesson-card-top"><span class="lesson-icon ${l.color}">${l.icon}</span><button class="lesson-check ${completed.has(l.id)?'checked':''}" data-complete="${l.id}" aria-label="${completed.has(l.id)?'완료 취소':'레슨 완료 표시'}">${completed.has(l.id)?'✓':'○'}</button></div><div class="lesson-meta"><span>${l.cat}</span><i>·</i><span>${l.time}</span></div><h3>${l.title}</h3><p>${l.desc}</p><button class="lesson-open" data-lesson="${l.id}">${completed.has(l.id)?'다시 보기':'레슨 보기'} <span>→</span></button></article>`).join('');
}
function renderProgress(){
  const groups=[{ids:[1,2,3],count:'#basicProgress',bar:'#basicBar'},{ids:[4,5,6],count:'#promptProgress',bar:'#promptBar'},{ids:[7,8,9],count:'#useProgress',bar:'#useBar'}];
  groups.forEach(g=>{const n=g.ids.filter(id=>completed.has(id)).length;document.querySelector(g.count).textContent=`${n} / 3`;document.querySelector(g.bar).style.width=`${n/3*100}%`});
}
function markComplete(id){completed.has(id)?completed.delete(id):completed.add(id);localStorage.setItem(progressKey,JSON.stringify([...completed]));renderLessons();renderProgress()}

document.addEventListener('click',e=>{
  const tab=e.target.closest('[data-filter]'),lesson=e.target.closest('[data-lesson]'),check=e.target.closest('[data-complete]'),scroll=e.target.closest('a[href^="#"]');
  if(tab){filter=tab.dataset.filter;document.querySelectorAll('.lesson-tab').forEach(x=>x.classList.toggle('active',x===tab));renderLessons()}
  if(lesson)openLesson(+lesson.dataset.lesson);
  if(check){e.preventDefault();markComplete(+check.dataset.complete)}
  if(scroll){document.querySelectorAll('.mobile-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===scroll.getAttribute('href')))}
});

const dialog=document.querySelector('#lessonDialog');
function openLesson(id){
 const l=lessons.find(x=>x.id===id);if(!l)return;
 document.querySelector('#dialogContent').innerHTML=`<div class="lesson-modal-top"><span class="lesson-icon ${l.color}">${l.icon}</span><span class="dialog-tag">${l.cat} · ${l.time}</span></div><h2 class="dialog-title">${l.title}</h2><p class="dialog-lead">${l.body}</p><div class="dialog-box"><span class="quiz-eyebrow">✳ CHECK YOURSELF</span><h4>${l.quiz}</h4><details><summary>힌트와 답 보기</summary><p>${l.answer}</p></details></div><button class="dialog-action" data-modal-complete="${l.id}">${completed.has(l.id)?'학습 완료했어요 ✓':'이 레슨 완료하기'}</button>`;
 dialog.showModal();
}
document.querySelector('.dialog-close').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();const done=e.target.closest('[data-modal-complete]');if(done){const id=+done.dataset.modalComplete;if(!completed.has(id))markComplete(id);done.textContent='학습 완료했어요 ✓';done.classList.add('done')}});

const practiceInput=document.querySelector('#practiceInput');
practiceInput.value=localStorage.getItem(practiceKey)||'';
function updateCount(){document.querySelector('#charCount').textContent=`${practiceInput.value.length}자 · 답변은 이 기기 안에만 저장돼요`}
practiceInput.addEventListener('input',updateCount);updateCount();
document.querySelector('#savePractice').onclick=()=>{localStorage.setItem(practiceKey,practiceInput.value);const status=document.querySelector('#practiceStatus');status.textContent=practiceInput.value.trim()?'연습 내용을 이 기기에 저장했어요. 잘하셨어요!':'먼저 질문을 한 번 적어보세요.';};

renderLessons();renderProgress();
