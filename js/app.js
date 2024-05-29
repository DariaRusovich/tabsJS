const content = [
  [
    'React is extremely popular',
    'It makes building complex, interactive UIs a breeze',
    "It's powerful & flexible",
    'It has a very active and versatile ecosystem',
  ],
  [
    'Components, JSX & Props',
    'State',
    'Hooks (e.g., useEffect())',
    'Dynamic rendering',
  ],
  [
    'Official web page (react.dev)',
    'Next.js (Fullstack framework)',
    'React Native (build native mobile apps with React)',
  ],
];

const tabsBtns = document.getElementById('tabsBtns');
const tabsList = document.getElementById('tabsContent');

// Initial render of the first tab content
renderTabs(createTabsHtml(content[0]), tabsList);

tabsBtns.addEventListener('click', event => {
  const btn = event.target.closest('.tab-btn');
  if (btn) {
    const btnSiblings = findSiblings(btn);
    const btnIndex = Array.from(tabsBtns.children).indexOf(btn);

    if (btnIndex >= 0) {
      btn.classList.add('active');
      btnSiblings.forEach(btnSibling => {
        btnSibling.classList.remove('active');
      });

      renderTabs(createTabsHtml(content[btnIndex]), tabsList);
    }
  }
});

function createTabCard(tab) {
  return `<li>${tab}</li>`;
}

function createTabsHtml(tabsArray) {
  let tabsHtml = '<ul>';
  tabsArray.forEach(item => {
    tabsHtml += createTabCard(item);
  });
  tabsHtml += '</ul>';
  return tabsHtml;
}

function renderTabs(tabsHtml, tabsListElem) {
  tabsListElem.innerHTML = tabsHtml;
}

// Utility function to find siblings
function findSiblings(node) {
  return Array.from(node.parentElement.children).filter(
    child => child !== node
  );
}
