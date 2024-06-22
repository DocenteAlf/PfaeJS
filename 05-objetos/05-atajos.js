let obj = {}; // atajo para llamar al constructor

/**
 * En consola
 * let objeto={};
 * -undefined
 * objeto.constructor
 * f Object() { [native code] }
 *
 * let objeto2 = new Obejct();
 * -undefined
 * objeto2.constructor
 * f Object() { [native code] }
 */

/**
 * Constructores
 * new Object()
 * new Array() ; []
 * new String();  "" '' ``
 * new Number(); 12
 * new Boolean(); true false
 */

function Usuario() {
  this.name = "Rafa";
}
let user = new Usuario();
console.log(user.constructor);

/**
 * Console
 * typeof ""
 * string
 * typeof new String()
 * object
 */

const s1 = "1+1";
const s2 = new String("1+1");
console.log("eval(s1):",eval(s1), "   eval(s2):",eval(s2))
console.log("s1.valueOf()", s1.valueOf(), "s2.valueOf()",s2.valueOf()) 
