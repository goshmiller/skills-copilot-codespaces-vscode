function skillsMember() {
    const member = document.querySelector('.member');
    const memberSkills = document.querySelector('.member-skills');
    const memberSkillsClose = document.querySelector('.member-skills-close');
    const memberSkillsCloseIcon = document.querySelector('.member-skills-close i');

    member.addEventListener('click', () => {
        memberSkills.classList.remove('hidden');
    });

    memberSkillsClose.addEventListener('click', () => {
        memberSkills.classList.add('hidden');
    });

    memberSkillsCloseIcon.addEventListener('click', () => {
        memberSkills.classList.add('hidden');
    });
}