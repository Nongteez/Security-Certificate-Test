export default async function* (source) {
 for await (const e of source) if(e.type==='test:fail'){
 const d=e.data,err=d.details.error,c=err.cause||err;
 yield JSON.stringify({name:d.name,file:d.file,line:d.line,operator:c.operator,expected:c.expected,actual:c.actual,error:c.message,stack:c.stack})+'\n';
 }
}
