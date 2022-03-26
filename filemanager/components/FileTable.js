const FileTable = ({ files }) => {
  return (
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              File Id
            </th>
            <th scope="col" className="px-6 py-3">
              File Name
            </th>
            <th scope="col" className="px-6 py-3">
              File Description
            </th>

            <th scope="col" className="px-6 py-3">
              File Type
            </th>
            <th scope="col" className="px-6 py-3">
              File Size
            </th>
            <th scope="col" className="px-6 py-3">
              Uploaded At
            </th>
            <th scope="col" className="px-6 py-3">
              Uploaded By
            </th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, key) => (
            <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {file.fileId}
              </th>
              <td className="px-6 py-4">{file.fileName}</td>
              <td className="px-6 py-4">{file.fileDescription}</td>
              <td className="px-6 py-4">{file.fileType}</td>
              <td className="px-6 py-4">{file.fileSize}</td>
              <td className="px-6 py-4">{file.uploadTime}</td>
              <td className="px-6 py-4">{file.uploader}</td>

              <td className="px-6 py-4 text-right">
                <a
                  href={`https://gateway.ipfs.io/ipfs/${file.fileHash}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Download
                </a>
              </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default FileTable;
