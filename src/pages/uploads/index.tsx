import { UploadOutlined } from '@ant-design/icons';
import { Button, Progress, Upload, UploadFile } from 'antd';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Uploads = () => {
  const [file, setFile] = useState<UploadFile>();
  const [videoURL, setVideoURL] = useState('');

  const [progress, setProgress] = useState(0);

  const customRequest = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsIm5hbWUiOiJzdHJpbmcgc3RyaW5nIiwicGhvbmUiOiJzdHJpbmciLCJwcm9maWxlIjoic3RyaW5nIiwiZXhwaXJlcyI6MTY4MzAyMzI4MC4yNDkwODQyfQ.riOYRQAdydgtkvyq25TdvWO_cIsA4TUzDMA3TfGI37M`,
      },

      onUploadProgress: (event: any) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };

    fmData.append('file', file);
    try {
      const res = await axios.post(
        'https://8000-mui2108-accidentfastapi-dbbkzjy5flt.ws-us96.gitpod.io/upload',
        fmData,
        config
      );

      onSuccess('Ok');
      console.log('server res: ', res);
      if (res.status === 200) {
        setVideoURL(
          `https://8000-mui2108-accidentfastapi-dbbkzjy5flt.ws-us96.gitpod.io${res.data.path}`
        );
      }
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      onError({ err });
    }
  };
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-h-[calc(100vh_-_24px)] tw-flex-col">
      <ReactPlayer url={videoURL} />
      {progress !== 0 && (
        <Progress
          strokeLinecap="butt"
          type="circle"
          percent={progress}
          style={{ marginTop: 24 }}
        />
      )}

      <Upload
        onChange={(e) => setFile(e.file)}
        customRequest={customRequest}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />} style={{ marginTop: 24 }}>
          Video Upload
        </Button>
      </Upload>
    </div>
  );
};

export default Uploads;
