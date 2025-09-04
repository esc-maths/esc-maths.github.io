r = 5; % set rank for approximation
a=imread('note_screenshot.png');  % change to the name of your jpg image
##a=imread('Lambs.jpg');  % change to the name of your jpg image
R=double(a(:,:,1)); % extract Red colour
G=double(a(:,:,2)); % extract Greeen colour
B=double(a(:,:,3)); % extract Blue colour

sz = size(R); fprintf('Image has size %i x %i\n',sz) % image size

[U,S,V] = svds(R,r); % find rank-r SVD for Red
clear a_out %Make sure we don't have problems running the code multiple times.
a_out(:,:,1) = U*S*V';  % create rank-r approximation for Red
[U,S,V] = svds(G,r); % find rank-r SVD for Green
a_out(:,:,2) = U*S*V';  % create rank-r approximation for Green
[U,S,V] = svds(B,r); % find rank-r SVD for Blue
a_out(:,:,3) = U*S*V';  % create rank-r approximation for Blue

##newname = sprintf('Lambs-%i.jpg',r);  % create name for compressed image
##imwrite(a,newname,'jpg')   % create image

#Now massage the outputs to get them in the form that MONTAGE.M wants.
a_out = uint8(a_out); #First cast from double to integers.
a_com(:,:,:,1) = a; #Now make an n x m x 3 x 2 array (4th index labels pictures)
a_com(:,:,:,2) = a_out;
%Open a new figure and print the figures side by side.
figure
montage(a_com,"Size",[1,2])
