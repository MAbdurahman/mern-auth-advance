export function getFirstName(fullName) {
   let name = [];
   name = fullName.split(' ');

   return name[0];
}

export function getLastName(fullName) {
   let name = [];
   name = fullName.split(' ');

   return name[name.length - 1];
}