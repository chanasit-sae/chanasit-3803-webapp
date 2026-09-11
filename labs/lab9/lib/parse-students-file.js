async function parseStudents() {
  try {
    const response = await fetch("files/students.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const list = document.createElement("ol");
    for (const member of data.wclass) {
      const student = member.student;
      const item = document.createElement("li");

      item.append(`${student["@attributes"].id} `);

      const name = document.createElement("strong");
      name.textContent = student.name;
      item.append(name, " has skills ");

      const skill = document.createElement("em");
      skill.textContent = student.skill;
      item.append(skill);

      list.append(item);
    }
    document.querySelector("#student").append(list);
  } catch (err) {
    document.querySelector("#student").textContent = `Error: ${err.message}`;
  }
}

parseStudents();
