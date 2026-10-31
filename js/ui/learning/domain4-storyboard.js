// Trusted composition assignments. Content supplies semantic blocks, never executable layouts.
const definitions=[
 ['network-request',['request-path','osi-upper','osi-lower','tcpip-map','encapsulation','tcp-udp','delivery-decision'],['path','stack','stack','mapping','envelope','compare','scenario'],1],
 ['addresses-vpns',['address-notation','private-public','nat-boundary','dual-stack','vpn-scope','tunnel-decision'],['compare','path','boundary','compare','tunnel','scenario'],2],
 ['traffic-rules-signals',['transport-endpoints','service-clues','firewall-policy','detection-prevention','ai-monitoring','alert-decision'],['path','mapping','rules','compare','path','scenario'],0],
 ['wireless-connected-systems',['wifi-controls','bluetooth-pairing','device-overlap','ot-change-safety','iot-lifecycle','wireless-signals','device-decision'],['layers','path','mapping','path','path','rules','scenario'],3],
 ['segmentation-paths',['blast-radius','firewall-zones','dmz-path','vlan-routing','workload-policy','ai-environment-boundary','path-decision'],['boundary','mapping','boundary','boundary','boundary','boundary','scenario'],1],
 ['layered-zero-trust',['independent-defenses','residual-dependencies','resource-decision','complementary-controls','access-decision'],['layers','compare','path','mapping','scenario'],2],
 ['cloud-characteristics',['cloud-model','self-service','elasticity','measured-service','pooling-network-access','capacity-decision'],['path','path','capacity','mapping','compare','scenario'],0],
 ['services-responsibility',['iaas-stack','paas-stack','saas-boundary','faas-code','named-responsibilities','ai-hosting','duty-decision'],['stack','stack','boundary','path','mapping','boundary','scenario'],3],
 ['cloud-deployments',['public-access-boundary','private-ownership','community-governance','hybrid-composition','multicloud-dependencies','deployment-decision'],['boundary','compare','path','boundary','compare','scenario'],1]
];
export const domain4Storyboard=definitions.map(([slug,suffixes,layouts,best],i)=>{const n=String(i+1).padStart(2,'0');return {id:`lesson-d4-${n}-${slug}`,objectiveId:i<4?'4.1':i<6?'4.2':'4.3',best,slides:suffixes.map((s,j)=>({id:`slide-d4-${n}-${String(j+1).padStart(2,'0')}-${s}`,layout:layouts[j]}))}});
