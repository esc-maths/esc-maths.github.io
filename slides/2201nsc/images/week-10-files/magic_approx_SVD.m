A = magic(10)  % generate matrix A
r=1;
[u,s,v]=svds(A,r);  % find rank-r SVD for A
A_approx = u*s*v' % create rank-r approximation for A

%% now create images to compare
% find largest element in A or A_approx
amax=max(max(max(A)),max(max(A_approx)));
% find smallest element in A or A_approx
amin=min(min(min(A)),min(min(A_approx)));

% rerescale A and A_approx to produce colours
A_color = (A - amin)/(amax-amin)*63;
A_approx_color = (A_approx - amin)/(amax-amin)*63;

figure(1);colormap(bone);
image(A_color)
figure(2);colormap(bone);
image(A_approx_color)
